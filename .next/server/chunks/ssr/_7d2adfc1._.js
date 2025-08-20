module.exports = {

"[project]/src/lib/cache.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Comprehensive caching system for the e-commerce app
__turbopack_context__.s({
    "AppCache": (()=>AppCache),
    "cache": (()=>cache),
    "cachedApiCall": (()=>cachedApiCall),
    "getCachedDataInstant": (()=>getCachedDataInstant)
});
class AppCache {
    static instance;
    cache = new Map();
    isOnline = true;
    onlineCallbacks = [];
    isClient = false;
    // Cache configurations for different data types
    cacheConfigs = {
        seller: {
            ttl: 30 * 60 * 1000,
            maxAge: 60 * 60 * 1000,
            staleWhileRevalidate: true
        },
        config: {
            ttl: 30 * 60 * 1000,
            maxAge: 60 * 60 * 1000,
            staleWhileRevalidate: true
        },
        categories: {
            ttl: 15 * 60 * 1000,
            maxAge: 30 * 60 * 1000,
            staleWhileRevalidate: true
        },
        products: {
            ttl: 10 * 60 * 1000,
            maxAge: 20 * 60 * 1000,
            staleWhileRevalidate: true
        },
        product: {
            ttl: 10 * 60 * 1000,
            maxAge: 20 * 60 * 1000,
            staleWhileRevalidate: true
        },
        static: {
            ttl: 24 * 60 * 60 * 1000,
            maxAge: 48 * 60 * 60 * 1000,
            staleWhileRevalidate: true
        }
    };
    constructor(){
        this.isClient = "undefined" !== 'undefined';
        if (this.isClient) {
            this.initializeOnlineDetection();
            this.loadFromLocalStorage();
        }
    }
    static getInstance() {
        if (!AppCache.instance) {
            AppCache.instance = new AppCache();
        }
        return AppCache.instance;
    }
    initializeOnlineDetection() {
        if (!this.isClient) return;
        this.isOnline = navigator.onLine;
        window.addEventListener('online', ()=>{
            this.isOnline = true;
            this.notifyOnlineCallbacks(true);
        });
        window.addEventListener('offline', ()=>{
            this.isOnline = false;
            this.notifyOnlineCallbacks(false);
        });
    }
    notifyOnlineCallbacks(isOnline) {
        this.onlineCallbacks.forEach((callback)=>callback(isOnline));
    }
    onOnlineStatusChange(callback) {
        this.onlineCallbacks.push(callback);
        return ()=>{
            const index = this.onlineCallbacks.indexOf(callback);
            if (index > -1) {
                this.onlineCallbacks.splice(index, 1);
            }
        };
    }
    isOffline() {
        return !this.isOnline;
    }
    generateKey(key, language, params) {
        const paramString = params ? JSON.stringify(params) : '';
        return `${key}_${language}_${paramString}`;
    }
    loadFromLocalStorage() {
        if (!this.isClient) return;
        try {
            const stored = localStorage.getItem('app_cache');
            if (stored) {
                const parsed = JSON.parse(stored);
                this.cache = new Map(parsed);
            }
        } catch (error) {
            console.warn('Failed to load cache from localStorage:', error);
        }
    }
    saveToLocalStorage() {
        if (!this.isClient) return;
        try {
            const serialized = JSON.stringify(Array.from(this.cache.entries()));
            localStorage.setItem('app_cache', serialized);
        } catch (error) {
            console.warn('Failed to save cache to localStorage:', error);
        }
    }
    isExpired(item, config) {
        const now = Date.now();
        return now - item.timestamp > config.maxAge;
    }
    isStale(item, config) {
        const now = Date.now();
        return now - item.timestamp > config.ttl;
    }
    set(key, data, type, language, params) {
        const cacheKey = this.generateKey(key, language, params);
        const config = this.cacheConfigs[type];
        const item = {
            data,
            timestamp: Date.now(),
            language,
            expiryTime: Date.now() + config.maxAge
        };
        this.cache.set(cacheKey, item);
        this.saveToLocalStorage();
    }
    get(key, type, language, params) {
        const cacheKey = this.generateKey(key, language, params);
        const item = this.cache.get(cacheKey);
        const config = this.cacheConfigs[type];
        if (!item) {
            return {
                data: null,
                isStale: true,
                isExpired: true
            };
        }
        const isExpired = this.isExpired(item, config);
        const isStale = this.isStale(item, config);
        if (isExpired) {
            this.cache.delete(cacheKey);
            this.saveToLocalStorage();
            return {
                data: null,
                isStale: true,
                isExpired: true
            };
        }
        return {
            data: item.data,
            isStale,
            isExpired
        };
    }
    // Get fresh cached data immediately without stale checks for instant loading
    getImmediate(key, type, language, params) {
        const cacheKey = this.generateKey(key, language, params);
        const item = this.cache.get(cacheKey);
        const config = this.cacheConfigs[type];
        if (!item) {
            return null;
        }
        const isExpired = this.isExpired(item, config);
        if (isExpired) {
            this.cache.delete(cacheKey);
            this.saveToLocalStorage();
            return null;
        }
        return item.data;
    }
    invalidate(pattern, language) {
        if (!pattern) {
            this.cache.clear();
        } else {
            const keysToDelete = [];
            for (const key of this.cache.keys()){
                if (key.includes(pattern) && (!language || key.includes(language))) {
                    keysToDelete.push(key);
                }
            }
            keysToDelete.forEach((key)=>this.cache.delete(key));
        }
        this.saveToLocalStorage();
    }
    // Clean up expired items
    cleanup() {
        if (!this.isClient) return;
        const now = Date.now();
        const keysToDelete = [];
        for (const [key, item] of this.cache.entries()){
            if (now > item.expiryTime) {
                keysToDelete.push(key);
            }
        }
        keysToDelete.forEach((key)=>this.cache.delete(key));
        this.saveToLocalStorage();
    }
    // Get cache statistics
    getStats() {
        return {
            size: this.cache.size,
            isOnline: this.isOnline,
            entries: Array.from(this.cache.entries()).map(([key, item])=>({
                    key,
                    language: item.language,
                    age: Date.now() - item.timestamp,
                    expiresIn: item.expiryTime - Date.now()
                }))
        };
    }
}
const cache = AppCache.getInstance();
async function cachedApiCall(key, type, language, fetcher, params) {
    const cacheInstance = AppCache.getInstance();
    // First try to get immediate cached data (even if stale)
    const immediateData = cacheInstance.getImmediate(key, type, language, params);
    // If we have cached data and we're offline, return it immediately
    if (immediateData && cacheInstance.isOffline()) {
        return immediateData;
    }
    // Check if we have fresh cached data
    const cached = cacheInstance.get(key, type, language, params);
    if (cached.data && !cached.isStale) {
        return cached.data;
    }
    try {
        // Fetch fresh data
        const freshData = await fetcher();
        cacheInstance.set(key, freshData, type, language, params);
        return freshData;
    } catch (error) {
        // If fetch fails and we have any cached data (including stale), return it
        if (immediateData) {
            console.warn(`API call failed, returning cached data for ${key}:`, error);
            return immediateData;
        }
        throw error;
    }
}
function getCachedDataInstant(key, type, language, params) {
    const cacheInstance = AppCache.getInstance();
    return cacheInstance.getImmediate(key, type, language, params);
}
}}),
"[project]/src/utils/api.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SELLER_ID": (()=>SELLER_ID),
    "addAddress": (()=>addAddress),
    "addToCart": (()=>addToCart),
    "chooseShippingMethod": (()=>chooseShippingMethod),
    "digitalPaymentPlaceOrder": (()=>digitalPaymentPlaceOrder),
    "formatPrice": (()=>formatPrice),
    "getAddressList": (()=>getAddressList),
    "getCart": (()=>getCart),
    "getConfig": (()=>getConfig),
    "getHeaders": (()=>getHeaders),
    "getOrCreateGuestId": (()=>getOrCreateGuestId),
    "getProductDetails": (()=>getProductDetails),
    "getSellerBanners": (()=>getSellerBanners),
    "getSellerCategories": (()=>getSellerCategories),
    "getSellerInfo": (()=>getSellerInfo),
    "getSellerInfoFromCart": (()=>getSellerInfoFromCart),
    "getSellerProducts": (()=>getSellerProducts),
    "getShippingMethods": (()=>getShippingMethods),
    "placeOrder": (()=>placeOrder),
    "removeFromCart": (()=>removeFromCart),
    "setCheckoutSession": (()=>setCheckoutSession),
    "trackOrder": (()=>trackOrder),
    "updateCartQuantity": (()=>updateCartQuantity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache.ts [app-rsc] (ecmascript)");
;
const BASE_URL = 'https://awisapp.com/api/v1';
const SELLER_ID = process.env.NEXT_PUBLIC_SELLER_ID || process.env.SELLER_ID || '1';
// Helper function to get current language
function getCurrentLanguage() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return 'ar';
}
function getHeaders() {
    const language = getCurrentLanguage();
    // Map frontend language to backend language code
    const backendLang = language === 'ar' ? 'kw' : 'en';
    return {
        'Content-Type': 'application/json',
        'Accept-Language': language,
        'X-Language': language,
        'lang': backendLang
    };
}
async function getOrCreateGuestId(forceNew = false) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    throw new Error('Not running in browser');
}
async function getSellerInfo() {
    const language = getCurrentLanguage();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cachedApiCall"])('seller', 'seller', language, async ()=>{
        const res = await fetch(`${BASE_URL}/seller?seller_id=${SELLER_ID}`, {
            headers: getHeaders(),
            next: {
                revalidate: 60
            }
        });
        if (!res.ok) throw new Error('Failed to fetch seller info');
        return res.json();
    });
}
async function getSellerCategories() {
    const language = getCurrentLanguage();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cachedApiCall"])('categories', 'categories', language, async ()=>{
        const guestId = await getOrCreateGuestId();
        const res = await fetch(`${BASE_URL}/categories?seller_id=${SELLER_ID}&guest_id=${guestId}`, {
            headers: getHeaders(),
            next: {
                revalidate: 60
            }
        });
        if (!res.ok) throw new Error('Failed to fetch seller categories');
        return res.json();
    });
}
async function getSellerProducts(params = {}) {
    const language = getCurrentLanguage();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cachedApiCall"])('products', 'products', language, async ()=>{
        const guestId = await getOrCreateGuestId();
        const query = new URLSearchParams({
            guest_id: guestId,
            limit: params.limit || '20',
            offset: params.offset || '1',
            ...params
        }).toString();
        // Use the correct seller-specific endpoint
        const res = await fetch(`${BASE_URL}/seller/${SELLER_ID}/products?${query}`, {
            headers: getHeaders(),
            next: {
                revalidate: 60
            }
        });
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        return data;
    }, params);
}
async function getSellerBanners() {
    const language = getCurrentLanguage();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cachedApiCall"])('banners', 'static', language, async ()=>{
        const res = await fetch(`${BASE_URL}/banners`, {
            headers: getHeaders(),
            next: {
                revalidate: 60
            }
        });
        if (!res.ok) throw new Error('Failed to fetch banners');
        return res.json();
    });
}
async function getConfig() {
    const language = getCurrentLanguage();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cachedApiCall"])('config', 'config', language, async ()=>{
        const res = await fetch(`${BASE_URL}/config`, {
            headers: getHeaders(),
            next: {
                revalidate: 60
            }
        });
        if (!res.ok) throw new Error('Failed to fetch config');
        return res.json();
    });
}
async function getProductDetails(slug, guestId) {
    const language = getCurrentLanguage();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cachedApiCall"])(`product_${slug}`, 'product', language, async ()=>{
        const actualGuestId = guestId || await getOrCreateGuestId();
        const apiUrl = `https://awisapp.com/api/v1/products/details/${slug}?guest_id=${actualGuestId}`;
        const res = await fetch(apiUrl, {
            headers: getHeaders()
        });
        let raw = await res.text();
        let parsed = {};
        try {
            parsed = JSON.parse(raw);
        } catch (e) {
            parsed = {
                error: 'Invalid JSON',
                raw
            };
        }
        return parsed;
    });
}
async function addToCart(productId, quantity = 1, selectedColor, selectedOptions, selectedVariant) {
    const guestId = await getOrCreateGuestId();
    const data = {
        id: productId,
        guest_id: guestId,
        quantity: quantity,
        buy_now: 0
    };
    if (selectedVariant) {
        data.variant = selectedVariant.type;
        data.price = selectedVariant.price;
        data.sku = selectedVariant.sku;
        data.qty = selectedVariant.qty;
    }
    // Send color as color code if available
    if (selectedColor) {
        // If selectedColor is a color name, try to find the code from selectedVariant or selectedOptions
        if (selectedVariant && selectedVariant.color_code) {
            data.color = selectedVariant.color_code;
        } else {
            data.color = selectedColor;
        }
    }
    // Flatten choices: send each as choice_1, choice_2, etc.
    if (selectedOptions) {
        let idx = 1;
        for (const [key, value] of Object.entries(selectedOptions)){
            data[`choice_${idx}`] = value;
            idx++;
        }
    }
    const res = await fetch(`${BASE_URL}/cart/add`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to add to cart: ${res.status} ${errorText}`);
    }
    const result = await res.json();
    return result;
}
async function getCart() {
    const guestId = await getOrCreateGuestId();
    const res = await fetch(`${BASE_URL}/cart?guest_id=${guestId}`, {
        headers: getHeaders()
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch cart: ${res.status} ${errorText}`);
    }
    const result = await res.json();
    return result;
}
async function updateCartQuantity(cartId, quantity) {
    const guestId = await getOrCreateGuestId();
    const data = {
        _method: 'put',
        key: cartId,
        quantity: quantity,
        guest_id: guestId
    };
    const res = await fetch(`${BASE_URL}/cart/update`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to update cart: ${res.status} ${errorText}`);
    }
    const result = await res.json();
    return result;
}
async function removeFromCart(cartId) {
    const guestId = await getOrCreateGuestId();
    const data = {
        _method: 'delete',
        guest_id: guestId,
        key: cartId
    };
    const res = await fetch(`${BASE_URL}/cart/remove`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to remove from cart: ${res.status} ${errorText}`);
    }
    const result = await res.json();
    return result;
}
function formatPrice(price, config, language = 'ar') {
    if (!price || price <= 0) return '';
    // If config or currency_list is missing, don't try to convert or show a price
    if (!config || !config.currency_list) {
        return '';
    }
    try {
        // Get currency symbol from config, default to KD
        let currencySymbol = 'KD';
        let decimalPoints = 2;
        let convertedPrice = price;
        if (config) {
            // Find the active currency (status: true)
            const activeCurrency = config.currency_list?.find((curr)=>curr.status === true);
            // Find the USD currency (status: false, code: USD)
            const usdCurrency = config.currency_list?.find((curr)=>curr.status === false && curr.code === 'USD');
            if (activeCurrency) {
                currencySymbol = activeCurrency.symbol || 'KD';
                const activeRate = parseFloat(activeCurrency.exchange_rate) || 1;
                const usdRate = parseFloat(usdCurrency?.exchange_rate) || 1;
                // Apply currency conversion: price * activeRate * (1 / usdRate)
                // This matches the Flutter app's conversion logic
                convertedPrice = price * activeRate * (1 / usdRate);
            }
            // Get decimal point settings
            decimalPoints = config.decimal_point_settings || 2;
        }
        // Format price with proper decimal places and commas
        const formattedPrice = convertedPrice.toFixed(decimalPoints);
        const priceWithCommas = formattedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // Display currency symbol based on language direction
        // For Arabic (RTL): "دك" after price, for English (LTR): "KD" before price
        const isRTL = language === 'ar';
        const displaySymbol = isRTL ? 'دك' : 'KD';
        // Format based on language direction
        if (isRTL) {
            // Arabic: price دك (symbol after price)
            return `${priceWithCommas} ${displaySymbol}`;
        } else {
            // English: KD price (symbol before price)
            return `${displaySymbol} ${priceWithCommas}`;
        }
    } catch (error) {
        console.error('Error formatting price:', error);
        const isRTL = language === 'ar';
        const displaySymbol = isRTL ? 'دك' : 'KD';
        if (isRTL) {
            return `${price.toFixed(2)} ${displaySymbol}`;
        } else {
            return `${displaySymbol} ${price.toFixed(2)}`;
        }
    }
}
async function placeOrder(params) {
    let { guest_id, cartItems, shipping_cost, ...rest } = params;
    // Fallback for guest_id
    if (!guest_id || isNaN(Number(guest_id))) {
        guest_id = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : '1';
    }
    const query = new URLSearchParams({
        ...Object.fromEntries(Object.entries(rest).map(([k, v])=>[
                k,
                v?.toString() ?? ''
            ])),
        cartItems: JSON.stringify(cartItems),
        guest_id: guest_id.toString(),
        is_guest: '1',
        ...shipping_cost !== undefined ? {
            shipping_cost: shipping_cost.toString()
        } : {}
    }).toString();
    const res = await fetch(`https://awisapp.com/api/v1/customer/order/place?${query}`, {
        headers: getHeaders()
    });
    if (!res.ok) throw new Error('Failed to place order');
    return await res.json();
}
async function addAddress(params) {
    let guestId = params.guest_id;
    if (!guestId) {
        guestId = await getOrCreateGuestId();
    }
    // Ensure latitude and longitude are always present and numbers
    let latitude = params.latitude;
    let longitude = params.longitude;
    if (latitude === undefined || latitude === null || latitude === "") latitude = 0;
    if (longitude === undefined || longitude === null || longitude === "") longitude = 0;
    let body = {
        contact_person_name: params.name,
        address_type: params.address_type || 'home',
        address: params.address,
        city: params.city,
        zip: params.postal || params.zip,
        phone: params.phone,
        state: params.state || '',
        country: params.country,
        latitude: latitude,
        longitude: longitude,
        is_billing: false,
        guest_id: guestId.toString(),
        email: params.email || '',
        is_guest: 1
    };
    let res = await fetch('https://awisapp.com/api/v1/customer/address/add', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error('Failed to add address');
    return await res.json();
}
async function getAddressList(guest_id) {
    const res = await fetch(`https://awisapp.com/api/v1/customer/address/list?guest_id=${encodeURIComponent(guest_id.toString())}`, {
        headers: getHeaders()
    });
    if (!res.ok) throw new Error('Failed to fetch address list');
    const data = await res.json();
    // Flutter expects a plain array, not wrapped in addresses/data
    return Array.isArray(data) ? data : data.addresses || data.data || [];
}
function getSellerInfoFromCart(cartItems) {
    if (!cartItems || cartItems.length === 0) return {
        sellerId: SELLER_ID,
        sellerType: 'admin'
    };
    const first = cartItems[0];
    return {
        sellerId: first.seller_id || first.sellerId || SELLER_ID,
        sellerType: first.seller_is || first.sellerIs || 'admin'
    };
}
async function getShippingMethods(_sellerId, _sellerType, guestId) {
    // Always fetch admin/global shipping methods only
    const res = await fetch(`https://awisapp.com/api/v1/shipping-method/by-seller/${SELLER_ID}/admin?guest_id=${guestId}`, {
        headers: getHeaders()
    });
    const data = await res.json();
    const options = Array.isArray(data) ? data : data.shipping_methods || data.data || [];
    return options;
}
async function chooseShippingMethod(shippingMethodId, guestId, cartGroupId = 'default') {
    const body = {
        id: shippingMethodId,
        guest_id: guestId,
        cart_group_id: cartGroupId
    };
    const res = await fetch('https://awisapp.com/api/v1/shipping-method/choose-for-order', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error('Failed to choose shipping method');
    return await res.json();
}
async function digitalPaymentPlaceOrder(params) {
    const guest_id = await getOrCreateGuestId();
    const is_guest = 1;
    const is_check_create_account = params.is_check_create_account ? 1 : 0;
    const body = {
        order_note: params.order_note || '',
        customer_id: params.customer_id || guest_id,
        address_id: params.address_id,
        billing_address_id: params.billing_address_id,
        coupon_code: params.coupon_code || '',
        coupon_discount: params.coupon_discount || '',
        payment_platform: params.payment_platform || 'web',
        payment_method: params.payment_method,
        callback: null,
        payment_request_from: params.payment_request_from || 'web',
        guest_id: guest_id,
        is_guest: is_guest,
        is_check_create_account: is_check_create_account,
        password: params.password || ''
    };
    // POST to the correct API endpoint for digital payment
    const res = await fetch('https://awisapp.com/api/v1/digital-payment', {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error('Failed to place digital payment order');
    return await res.json();
}
async function setCheckoutSession(address_id, billing_address_id) {
    const res = await fetch('https://awisapp.com/api/v1/set-checkout-session', {
        method: 'POST',
        credentials: 'include',
        headers: getHeaders(),
        body: JSON.stringify({
            address_id,
            billing_address_id
        })
    });
    if (!res.ok) throw new Error('Failed to set checkout session');
    return await res.json();
}
async function trackOrder(orderId, phoneNumber) {
    const data = {
        order_id: orderId,
        phone_number: phoneNumber
    };
    const res = await fetch(`${BASE_URL}/order/track-order`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to track order: ${res.status} ${errorText}`);
    }
    const result = await res.json();
    return result;
}
}}),
"[project]/src/app/ClientLayout.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/ClientLayout.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/ClientLayout.tsx <module evaluation>", "default");
}}),
"[project]/src/app/ClientLayout.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/ClientLayout.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/ClientLayout.tsx", "default");
}}),
"[project]/src/app/ClientLayout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ClientLayout$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/ClientLayout.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ClientLayout$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/ClientLayout.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ClientLayout$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ClientLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/ClientLayout.tsx [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Ms Right kw",
    description: "وسائل تعليمية تنمي تفكير وذكاء الأطفال"
};
async function RootLayout({ children }) {
    let seller = null;
    try {
        seller = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSellerInfo"])();
    } catch (e) {
        seller = null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "ar",
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ClientLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            seller: seller,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_7d2adfc1._.js.map