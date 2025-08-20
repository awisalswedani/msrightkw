module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[next]/internal/font/google/geist_f8791666.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "geist_f8791666-module__7xgGRG__className",
  "variable": "geist_f8791666-module__7xgGRG__variable",
});
}}),
"[next]/internal/font/google/geist_f8791666.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_f8791666$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_f8791666.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_f8791666$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_f8791666$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_f8791666$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/geist_mono_fffeda03.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "geist_mono_fffeda03-module__9UHtjq__className",
  "variable": "geist_mono_fffeda03-module__9UHtjq__variable",
});
}}),
"[next]/internal/font/google/geist_mono_fffeda03.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_fffeda03$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_fffeda03.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_fffeda03$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_fffeda03$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_fffeda03$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/lib/cache.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/utils/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache.ts [app-ssr] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cachedApiCall"])('seller', 'seller', language, async ()=>{
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cachedApiCall"])('categories', 'categories', language, async ()=>{
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cachedApiCall"])('products', 'products', language, async ()=>{
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cachedApiCall"])('banners', 'static', language, async ()=>{
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cachedApiCall"])('config', 'config', language, async ()=>{
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cachedApiCall"])(`product_${slug}`, 'product', language, async ()=>{
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
"[project]/src/components/CartContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CartProvider": (()=>CartProvider),
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
// Initial state
const initialState = {
    items: [],
    loading: false,
    error: null,
    totalItems: 0,
    subtotal: 0,
    total: 0
};
// Cart reducer
function cartReducer(state, action) {
    switch(action.type){
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'SET_CART':
            return {
                ...state,
                items: action.payload,
                totalItems: action.payload.reduce((sum, item)=>sum + item.quantity, 0),
                subtotal: action.payload.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0),
                total: action.payload.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0)
            };
        case 'ADD_ITEM':
            // Check for existing item with same product_id, variant, and color
            const existingItem = state.items.find((item)=>{
                const itemVariant = item.variant || '';
                const payloadVariant = action.payload.variant || '';
                const itemColor = item.color || '';
                const payloadColor = action.payload.color || '';
                const matches = item.product_id === action.payload.product_id && itemVariant === payloadVariant && itemColor === payloadColor;
                return matches;
            });
            if (existingItem) {
                // Update quantity of existing item
                const updatedItems = state.items.map((item)=>item.product_id === action.payload.product_id && item.variant === action.payload.variant && item.color === action.payload.color ? {
                        ...item,
                        quantity: item.quantity + action.payload.quantity
                    } : item);
                return {
                    ...state,
                    items: updatedItems,
                    totalItems: updatedItems.reduce((sum, item)=>sum + item.quantity, 0),
                    subtotal: updatedItems.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0),
                    total: updatedItems.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0)
                };
            } else {
                // Add new item
                const newItems = [
                    ...state.items,
                    action.payload
                ];
                return {
                    ...state,
                    items: newItems,
                    totalItems: newItems.reduce((sum, item)=>sum + item.quantity, 0),
                    subtotal: newItems.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0),
                    total: newItems.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0)
                };
            }
        case 'UPDATE_ITEM':
            const updatedItems = state.items.map((item)=>item.id === action.payload.id ? {
                    ...item,
                    quantity: action.payload.quantity
                } : item);
            return {
                ...state,
                items: updatedItems,
                totalItems: updatedItems.reduce((sum, item)=>sum + item.quantity, 0),
                subtotal: updatedItems.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0),
                total: updatedItems.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0)
            };
        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter((item)=>item.id !== action.payload);
            return {
                ...state,
                items: filteredItems,
                totalItems: filteredItems.reduce((sum, item)=>sum + item.quantity, 0),
                subtotal: filteredItems.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0),
                total: filteredItems.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0)
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: [],
                totalItems: 0,
                subtotal: 0,
                total: 0
            };
        case 'UPDATE_TOTALS':
            return {
                ...state,
                totalItems: state.items.reduce((sum, item)=>sum + item.quantity, 0),
                subtotal: state.items.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0),
                total: state.items.reduce((sum, item)=>sum + (item.price - item.discount) * item.quantity, 0)
            };
        default:
            return state;
    }
}
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(cartReducer, initialState);
    const [errorToast, setErrorToast] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [successToast, setSuccessToast] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [isMounted, setIsMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Ensure component is mounted on client side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    // Clear cart and guest_id if no guest_id is found (new session/private window)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        isMounted
    ]);
    // Load cart on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMounted) {
            loadCart();
        }
    }, [
        isMounted
    ]);
    // Check for payment success and clear cart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        isMounted
    ]);
    // Additional check: Clear cart when user returns to home page after payment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        isMounted
    ]);
    const loadCart = async ()=>{
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            });
            dispatch({
                type: 'SET_ERROR',
                payload: null
            });
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCart"])();
            // Handle different possible response structures
            let cartItems = [];
            if (Array.isArray(response)) {
                // Direct array response (actual API structure)
                cartItems = response;
            } else if (response.cart && Array.isArray(response.cart)) {
                cartItems = response.cart;
            } else if (response.items && Array.isArray(response.items)) {
                cartItems = response.items;
            } else if (response.data && Array.isArray(response.data)) {
                cartItems = response.data;
            } else {
                cartItems = [];
            }
            dispatch({
                type: 'SET_CART',
                payload: cartItems
            });
        } catch (error) {
            console.error('Failed to load cart:', error);
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to load cart'
            });
        } finally{
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    };
    const addToCartHandler = async (productId, quantity = 1, selectedColor, selectedOptions, selectedVariant)=>{
        try {
            dispatch({
                type: 'SET_LOADING',
                payload: true
            });
            dispatch({
                type: 'SET_ERROR',
                payload: null
            });
            const guest_id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateGuestId"])();
            // Check if product already exists in cart with same variant and color
            const existingItem = state.items.find((item)=>{
                const itemVariant = item.variant || '';
                const requestVariant = selectedVariant?.type || '';
                const itemColor = item.color || '';
                const requestColor = selectedColor || '';
                return item.product_id === productId && itemVariant === requestVariant && itemColor === requestColor;
            });
            if (existingItem) {
                // Update existing item quantity on server first
                const newQuantity = existingItem.quantity + quantity;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCartQuantity"])(existingItem.id, newQuantity);
                // Only update local state after successful API call
                dispatch({
                    type: 'UPDATE_ITEM',
                    payload: {
                        id: existingItem.id,
                        quantity: newQuantity
                    }
                });
            } else {
                // Add new item to server first
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToCart"])(productId, quantity, selectedColor, selectedOptions, selectedVariant);
                // Reload cart from server to get the complete item data and update local state
                await loadCart();
            }
        } catch (error) {
            console.error('Failed to add to cart:', error);
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to add to cart'
            });
            setErrorToast('Failed to add to cart');
            throw error;
        } finally{
            dispatch({
                type: 'SET_LOADING',
                payload: false
            });
        }
    };
    const updateQuantityHandler = async (cartId, quantity)=>{
        // Find the item and store previous quantity
        const prevItem = state.items.find((item)=>item.id === cartId);
        if (!prevItem) return;
        const prevQuantity = prevItem.quantity;
        try {
            dispatch({
                type: 'SET_ERROR',
                payload: null
            });
            const guest_id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateGuestId"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCartQuantity"])(cartId, quantity);
            // Only update local state after successful API call
            dispatch({
                type: 'UPDATE_ITEM',
                payload: {
                    id: cartId,
                    quantity
                }
            });
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to update quantity'
            });
            setErrorToast('Failed to update quantity');
            throw error;
        }
    };
    const removeFromCartHandler = async (cartId)=>{
        // Find the item and store previous state
        const prevItem = state.items.find((item)=>item.id === cartId);
        if (!prevItem) return;
        try {
            dispatch({
                type: 'SET_ERROR',
                payload: null
            });
            const guest_id = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateGuestId"])();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeFromCart"])(cartId);
            // Only update local state after successful API call
            dispatch({
                type: 'REMOVE_ITEM',
                payload: cartId
            });
        } catch (error) {
            dispatch({
                type: 'SET_ERROR',
                payload: 'Failed to remove from cart'
            });
            setErrorToast('Failed to remove from cart');
            throw error;
        }
    };
    const clearCart = ()=>{
        dispatch({
            type: 'CLEAR_CART'
        });
    };
    // Add a function to clear cart and guest_id (for logout or new session)
    const clearCartAndGuestId = ()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        dispatch({
            type: 'CLEAR_CART'
        });
    };
    const value = {
        state,
        addToCart: addToCartHandler,
        updateQuantity: updateQuantityHandler,
        removeFromCart: removeFromCartHandler,
        clearCart,
        loadCart,
        // Expose clearCartAndGuestId for use in logout/session reset
        clearCartAndGuestId
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: value,
        children: [
            children,
            errorToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow z-50",
                children: [
                    errorToast,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "ml-2",
                        onClick: ()=>setErrorToast(null),
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CartContext.tsx",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CartContext.tsx",
                lineNumber: 436,
                columnNumber: 9
            }, this),
            successToast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow z-50",
                children: [
                    successToast,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "ml-2",
                        onClick: ()=>setSuccessToast(null),
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CartContext.tsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CartContext.tsx",
                lineNumber: 442,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CartContext.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
function useCart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/public/locales/ar.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"home\":\"الرئيسية\",\"products\":\"المنتجات\",\"about\":\"من نحن\",\"contact\":\"اتصل بنا\",\"search_placeholder\":\"ابحث عن منتج...\",\"searching\":\"جاري البحث...\",\"no_results\":\"لا يوجد نتائج\",\"add_to_cart\":\"أضف إلى السلة\",\"buy_now\":\"اشتري الآن\",\"cart\":\"السلة\",\"cart_tooltip\":\"السلة\",\"item\":\"عنصر\",\"items\":\"عناصر\",\"total\":\"المجموع\",\"language\":\"اللغة\",\"supported_by\":\"بدعم من\",\"menu\":\"القائمة\",\"order_status\":\"حالة الطلب\",\"login\":\"تسجيل دخول\",\"more\":\"المزيد\",\"privacy_policy\":\"سياسة الخصوصية\",\"all\":\"الكل\",\"review_order\":\"قم بمراجعة طلبك\",\"cart_empty\":\"سلة التسوق الخاصة بك فارغة\",\"start_shopping_message\":\"ابدأ التسوق واختر المنتج المناسب\",\"start_shopping\":\"ابدأ التسوق\",\"cart_items\":\"عناصر السلة\",\"delete\":\"حذف\",\"promo_code\":\"رمز الخصم\",\"enter_promo_code\":\"أدخل رمز الخصم\",\"apply\":\"تطبيق\",\"order_summary\":\"ملخص الطلب\",\"subtotal\":\"المجموع الفرعي\",\"proceed_to_checkout\":\"إتمام الطلب\",\"continue_shopping\":\"مواصلة التسوق\",\"delete_confirmation\":\"هل انت متأكد من حذف هذا المنتج من سلة التسوق؟\",\"yes\":\"نعم\",\"no\":\"لا\",\"loading\":\"جاري التحميل...\",\"retry\":\"إعادة المحاولة\",\"error\":\"خطأ\",\"currency_symbol\":\"دك\",\"order_code\":\"رمز الطلب\",\"search_now\":\"ابحث الان\",\"back_to_products\":\"العودة إلى المنتجات\",\"loading_product\":\"جاري تحميل المنتج...\",\"in_stock\":\"متوفر\",\"out_of_stock\":\"غير متوفر\",\"available\":\"متوفر\",\"description\":\"الوصف\",\"specifications\":\"المواصفات\",\"suggested_products\":\"المنتجات المقترحة\",\"suggested_products_description\":\"قد يعجبك هذه المنتجات من هذا البائع\",\"quantity\":\"الكمية\",\"adding\":\"جاري الإضافة...\",\"about_us_content\":\"نحن منصة إلكترونية مبتكرة تهدف إلى تسهيل تجربة التسوق عبر الإنترنت، حيث نقدم لعملائنا مجموعة متنوعة من المنتجات التعليمية للأطفال التي تنمي تفكيرهم وذكائهم وهي وسائل تساعد المعلمين في ايصال المعلومات للطفل بطريقة رائعة وسهلة، كما نوفر التوصيل لجميع مناطق الكويت خلال وقت قياسي.\",\"privacy_policy_content\":\"نلتزم بحماية خصوصية عملائنا. عند استخدامك لموقعنا، نقوم بجمع بعض المعلومات الضرورية مثل الاسم، البريد الإلكتروني، رقم الهاتف، وعنوان التوصيل بهدف إتمام الطلبات وتقديم خدمة أفضل و باستخدامك لموقعنا، فإنك توافق على سياسة الخصوصية هذه.\",\"phone_number\":\"رقم الهاتف\",\"enter_phone_number\":\"أدخل رقم الهاتف\",\"phone_number_required\":\"رقم الهاتف مطلوب\",\"order_not_found\":\"لم يتم العثور على الطلب\",\"order_details\":\"تفاصيل الطلب\",\"order_date\":\"تاريخ الطلب\",\"order_total\":\"إجمالي الطلب\",\"delivery_address\":\"عنوان التوصيل\",\"payment_method\":\"طريقة الدفع\",\"order_items\":\"عناصر الطلب\",\"tracking_order\":\"تتبع الطلب\",\"paid\":\"مدفوع\",\"unpaid\":\"غير مدفوع\",\"track_another_order\":\"تتبع طلب آخر\",\"select_required_options_error\":\"يرجى اختيار جميع الخيارات المطلوبة قبل الإضافة إلى السلة.\",\"invalid_order_or_phone\":\"رقم الطلب أو رقم الهاتف غير صحيح\",\"checkout_address_info\":\"معلومات العنوان\",\"checkout_name\":\"الاسم الكامل\",\"checkout_phone\":\"رقم الهاتف\",\"checkout_email\":\"البريد الإلكتروني\",\"checkout_address_type\":\"نوع العنوان\",\"checkout_address_type_permanent\":\"دائم\",\"checkout_address_type_temporary\":\"مؤقت\",\"checkout_country\":\"الدولة\",\"checkout_city\":\"المدينة\",\"checkout_postal\":\"الرمز البريدي\",\"checkout_address\":\"العنوان\",\"checkout_next\":\"التالي\",\"checkout_saving_address\":\"...جاري حفظ العنوان\",\"shipping_and_payment\":\"التوصيل والدفع\",\"checkout_subtotal\":\"المجموع الفرعي\",\"checkout_shipping\":\"التوصيل\",\"checkout_total\":\"الإجمالي\",\"shipping_method\":\"التوصيل\",\"fast_delivery\":\"توصيل خلال ساعتين\"}"));}}),
"[project]/public/locales/en.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"home\":\"Home\",\"products\":\"Products\",\"about\":\"About\",\"contact\":\"Contact\",\"search_placeholder\":\"Search for a product...\",\"searching\":\"Searching...\",\"no_results\":\"No results found\",\"add_to_cart\":\"Add to Cart\",\"buy_now\":\"Buy Now\",\"cart\":\"Cart\",\"cart_tooltip\":\"Cart\",\"item\":\"item\",\"items\":\"items\",\"total\":\"Total\",\"language\":\"Language\",\"supported_by\":\"Supported by\",\"menu\":\"Menu\",\"order_status\":\"Order Status\",\"login\":\"Login\",\"more\":\"More\",\"privacy_policy\":\"Privacy Policy\",\"all\":\"All\",\"review_order\":\"Review Your Order\",\"cart_empty\":\"Your Cart is Empty\",\"start_shopping_message\":\"Start shopping and choose the right product\",\"start_shopping\":\"Start Shopping\",\"cart_items\":\"Cart Items\",\"delete\":\"Delete\",\"promo_code\":\"Promo Code\",\"enter_promo_code\":\"Enter promo code\",\"apply\":\"Apply\",\"order_summary\":\"Order Summary\",\"subtotal\":\"Subtotal\",\"proceed_to_checkout\":\"Proceed to Checkout\",\"continue_shopping\":\"Continue Shopping\",\"delete_confirmation\":\"Are you sure you want to delete this product from your cart?\",\"yes\":\"Yes\",\"no\":\"No\",\"loading\":\"Loading...\",\"retry\":\"Retry\",\"error\":\"Error\",\"currency_symbol\":\"KD\",\"order_code\":\"Order Code\",\"search_now\":\"Search Now\",\"back_to_products\":\"Back to Products\",\"loading_product\":\"Loading product...\",\"in_stock\":\"In Stock\",\"out_of_stock\":\"Out of Stock\",\"available\":\"available\",\"description\":\"Description\",\"specifications\":\"Specifications\",\"suggested_products\":\"Suggested Products\",\"suggested_products_description\":\"You might also like these products from this seller\",\"quantity\":\"Quantity\",\"adding\":\"Adding...\",\"about_us_content\":\"We are an innovative online platform that aims to facilitate the online shopping experience. We offer our customers a variety of educational products for children that develop their thinking and intelligence. These products help teachers communicate information to children in a wonderful and easy way. We also deliver to all areas of Kuwait in record time.\",\"privacy_policy_content\":\"We are committed to protecting our customers' privacy. When you use our website, we collect certain necessary information, such as your name, email address, phone number, and delivery address, to process orders and provide better service. By using our website, you agree to this privacy policy.\",\"phone_number\":\"Phone Number\",\"enter_phone_number\":\"Enter phone number\",\"phone_number_required\":\"Phone number is required\",\"order_not_found\":\"Order not found\",\"order_details\":\"Order Details\",\"order_date\":\"Order Date\",\"order_total\":\"Order Total\",\"delivery_address\":\"Delivery Address\",\"payment_method\":\"Payment Method\",\"order_items\":\"Order Items\",\"tracking_order\":\"Track Order\",\"paid\":\"Paid\",\"unpaid\":\"Unpaid\",\"track_another_order\":\"Track Another Order\",\"select_required_options_error\":\"Please select all required options before adding to cart.\",\"invalid_order_or_phone\":\"Invalid order code or phone number\",\"checkout_address_info\":\"Address Information\",\"checkout_name\":\"Full Name\",\"checkout_phone\":\"Phone Number\",\"checkout_email\":\"Email\",\"checkout_address_type\":\"Address Type\",\"checkout_address_type_permanent\":\"Permanent\",\"checkout_address_type_temporary\":\"Temporary\",\"checkout_country\":\"Country\",\"checkout_city\":\"City\",\"checkout_postal\":\"Postal Code\",\"checkout_address\":\"Address\",\"checkout_next\":\"Next\",\"checkout_saving_address\":\"Saving address...\",\"shipping_and_payment\":\"Shipping & Payment\",\"checkout_subtotal\":\"Subtotal\",\"checkout_shipping\":\"Shipping\",\"checkout_total\":\"Total\",\"shipping_method\":\"Delivery\",\"fast_delivery\":\"Delivery within 2 hours\"}"));}}),
"[project]/src/i18n.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$ar$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/ar.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/public/locales/en.json (json)");
;
;
;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isInitialized) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init({
        resources: {
            ar: {
                translation: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$ar$2e$json__$28$json$29$__["default"]
            },
            en: {
                translation: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$locales$2f$en$2e$json__$28$json$29$__["default"]
            }
        },
        lng: 'ar',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}}),
"[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n.ts [app-ssr] (ecmascript)");
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    language: 'ar',
    direction: 'rtl',
    setLanguage: (lang)=>{}
});
const LanguageProvider = ({ children })=>{
    // Initialize language from localStorage or default to 'ar'
    const [language, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ar');
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    // Initialize language from localStorage only on client side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        const savedLanguage = localStorage.getItem('language') || 'ar';
        setLang(savedLanguage);
    }, []);
    // Initialize document direction and i18n on first load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMounted && typeof document !== 'undefined') {
            document.documentElement.dir = direction;
            document.documentElement.lang = language;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].changeLanguage(language);
        }
    }, [
        language,
        direction,
        isMounted
    ]);
    const setLanguage = (lang)=>{
        setLang(lang);
        if (isMounted) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].changeLanguage(lang);
            // Save to localStorage
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            if (typeof document !== 'undefined') {
                document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                document.documentElement.lang = lang;
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            direction,
            setLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/LanguageContext.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
const useLanguage = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
}}),
"[project]/src/components/CartIcon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CartIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function CartIcon({ variant = 'light', noLink = false }) {
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const iconSrc = variant === 'dark' ? '/bag-dark.png' : '/bag-light.png';
    // Format price for tooltip
    const formatTooltipPrice = (price)=>{
        if (price <= 0) return 'Free';
        const isRTL = language === 'ar';
        const symbol = isRTL ? 'دك' : 'KD';
        const formattedPrice = price.toFixed(2);
        return isRTL ? `${formattedPrice} ${symbol}` : `${symbol} ${formattedPrice}`;
    };
    const cartContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center w-8 h-8 text-gray-700 hover:text-blue-600 transition-colors relative group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: iconSrc,
                alt: "Cart",
                className: "w-9 h-9"
            }, void 0, false, {
                fileName: "[project]/src/components/CartIcon.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            state.totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium",
                children: state.totalItems > 99 ? '99+' : state.totalItems
            }, void 0, false, {
                fileName: "[project]/src/components/CartIcon.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-medium text-gray-900",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('cart_tooltip'),
                                " (",
                                state.totalItems,
                                " ",
                                state.totalItems === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('item') : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('items'),
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CartIcon.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        state.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-sm text-gray-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('total'),
                                    ": ",
                                    formatTooltipPrice(state.total)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartIcon.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartIcon.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CartIcon.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CartIcon.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CartIcon.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
    if (noLink) {
        return cartContent;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/cart",
        children: cartContent
    }, void 0, false, {
        fileName: "[project]/src/components/CartIcon.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/web_constantsthe.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Web constants for app-wide use
__turbopack_context__.s({
    "WEB_CONSTANTS": (()=>WEB_CONSTANTS)
});
const WEB_CONSTANTS = {
    phone: "+96592272809",
    email: "ms.right.kw@gmail.com",
    whatsapp: "https://wa.me/96592272809",
    instagram: "https://www.instagram.com/ms.right.kw/",
    primaryColor: "#1b2599",
    secondaryColor: "#ff0000"
};
}}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CartIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/web_constantsthe.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Header({ seller }) {
    const { language, setLanguage, direction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const shopName = seller?.seller?.shop?.name || `${seller?.seller?.f_name || ''} ${seller?.seller?.l_name || ''}` || 'Seller Store';
    const logo = seller?.seller?.image_full_url?.path;
    // Get the correct seller ID from the seller prop or fallback to environment variable
    const currentSellerId = seller?.seller?.id || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SELLER_ID"];
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searching, setSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Professional debounced search with proper loading states
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!search.trim()) {
            setSuggestions([]);
            setShowDropdown(false);
            setSearching(false);
            return;
        }
        setSearching(true);
        setShowDropdown(true);
        const handler = setTimeout(async ()=>{
            try {
                const guestId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrCreateGuestId"])();
                const searchUrl = `https://awisapp.com/api/v1/seller/${currentSellerId}/products?q=${encodeURIComponent(search.trim())}&limit=100&guest_id=${guestId}`;
                const res = await fetch(searchUrl, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept-Language': language,
                        'X-Language': language,
                        'lang': language === 'ar' ? 'kw' : 'en'
                    }
                });
                const data = await res.json();
                // If no results, try alternative search approaches
                if (!data.products || data.products.length === 0) {
                    console.log('No results found, trying alternative search...');
                    // Try without guest_id parameter
                    try {
                        const altRes = await fetch(`https://awisapp.com/api/v1/seller/${currentSellerId}/products?search=${encodeURIComponent(search.trim())}&limit=8`, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept-Language': language,
                                'X-Language': language,
                                'lang': language === 'ar' ? 'kw' : 'en'
                            }
                        });
                        const altData = await altRes.json();
                        console.log('Alternative search response:', altData);
                        if (altData.products && altData.products.length > 0) {
                            setSuggestions(altData.products);
                            return;
                        }
                    } catch (error) {
                        console.log('Alternative search failed:', error);
                    }
                    // Try with different search parameter format
                    try {
                        const altRes2 = await fetch(`https://awisapp.com/api/v1/seller/${currentSellerId}/products?q=${encodeURIComponent(search.trim())}&limit=8&guest_id=${guestId}`, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept-Language': language,
                                'X-Language': language,
                                'lang': language === 'ar' ? 'kw' : 'en'
                            }
                        });
                        const altData2 = await altRes2.json();
                        console.log('Alternative search with q parameter:', altData2);
                        console.log('Q parameter search returned:', altData2.products?.length || 0, 'products');
                        if (altData2.products && altData2.products.length > 0) {
                            setSuggestions(altData2.products);
                            return;
                        }
                    } catch (error) {
                        console.log('Alternative search with q parameter failed:', error);
                    }
                    // Try with 'query' parameter
                    try {
                        const queryRes = await fetch(`https://awisapp.com/api/v1/seller/${currentSellerId}/products?query=${encodeURIComponent(search.trim())}&limit=8&guest_id=${guestId}`, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept-Language': language,
                                'X-Language': language,
                                'lang': language === 'ar' ? 'kw' : 'en'
                            }
                        });
                        const queryData = await queryRes.json();
                        console.log('Query parameter search response:', queryData);
                        console.log('Query parameter search returned:', queryData.products?.length || 0, 'products');
                        if (queryData.products && queryData.products.length > 0) {
                            setSuggestions(queryData.products);
                            return;
                        }
                    } catch (error) {
                        console.log('Query parameter search failed:', error);
                    }
                    // Try the shopView endpoint format
                    try {
                        const shopViewRes = await fetch(`https://awisapp.com/api/v1/shopView/${currentSellerId}/products?search=${encodeURIComponent(search.trim())}&limit=8`, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept-Language': language,
                                'X-Language': language,
                                'lang': language === 'ar' ? 'kw' : 'en'
                            }
                        });
                        const shopViewData = await shopViewRes.json();
                        console.log('ShopView search response:', shopViewData);
                        if (shopViewData.products && shopViewData.products.length > 0) {
                            setSuggestions(shopViewData.products);
                            return;
                        }
                    } catch (error) {
                        console.log('ShopView search failed:', error);
                    }
                }
                // Implement client-side filtering since the API doesn't filter by search term
                if (data.products && data.products.length > 0) {
                    const searchTerm = search.trim().toLowerCase();
                    const filteredProducts = data.products.filter((product)=>{
                        const productName = getLocalizedProductName(product, language).toLowerCase();
                        const productDescription = (product.details || '').toLowerCase();
                        const productCategory = (product.category?.name || '').toLowerCase();
                        return productName.includes(searchTerm) || productDescription.includes(searchTerm) || productCategory.includes(searchTerm);
                    });
                    // Only show results if we have matching products
                    if (filteredProducts.length > 0) {
                        setSuggestions(filteredProducts.slice(0, 8));
                    } else {
                        setSuggestions([]);
                    }
                } else {
                    setSuggestions([]);
                }
            } catch  {
                setSuggestions([]);
            } finally{
                setSearching(false);
            }
        }, 500); // Increased debounce time for better UX
        return ()=>clearTimeout(handler);
    }, [
        search,
        currentSellerId,
        language
    ]);
    // Hide dropdown on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClick(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target) && inputRef.current && !inputRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return ()=>document.removeEventListener('mousedown', handleClick);
    }, []);
    // Handle search submit
    const handleSearch = (e)=>{
        e.preventDefault();
        if (search.trim()) {
            router.push(`/products?search=${encodeURIComponent(search.trim())}`);
        }
    };
    // Handle product selection from dropdown
    const handleProductSelect = (product)=>{
        console.log('Product selected:', product);
        setShowDropdown(false);
        setSearch('');
        router.push(`/product/${product.slug || product.id}`);
    };
    // Function to get localized product name
    function getLocalizedProductName(product, language) {
        if (language === 'ar' && product.translations) {
            const t = product.translations.find((tr)=>tr.locale === 'kw' && tr.key === 'name');
            if (t && t.value) return t.value;
        } else if (language === 'en' && product.translations) {
            const t = product.translations.find((tr)=>tr.locale === 'en' && tr.key === 'name');
            if (t && t.value) return t.value;
        }
        return product.name;
    }
    // Language switcher logic
    const langChar = language === 'ar' ? 'E' : 'ع';
    const toggleLanguage = ()=>setLanguage(language === 'ar' ? 'en' : 'ar');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full z-50 fixed top-0 left-0 right-0 border-b shadow-lg",
        style: {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor,
                    height: '4px',
                    width: '100%'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center justify-between py-3",
                        dir: direction,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-x-6 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center group min-w-0",
                                    "aria-label": "Go to home page",
                                    children: [
                                        logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: logo,
                                            alt: shopName + ' - Store Logo',
                                            width: 40,
                                            height: 40,
                                            className: "h-10 w-10 rounded-full bg-white border border-gray-200 group-hover:opacity-80 transition-opacity",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-3 text-xl font-bold text-white truncate max-w-xs group-hover:text-gray-200 transition-colors",
                                            children: shopName
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                className: "flex-1 mx-8 max-w-2xl relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: inputRef,
                                            type: "text",
                                            className: `w-full rounded-md py-2 ${direction === 'rtl' ? 'pl-4 pr-12 text-right' : 'pl-12 pr-4 text-left'} text-black placeholder:text-black/60 bg-white focus:ring-2 focus:ring-black focus:outline-none text-lg shadow`,
                                            placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('search_placeholder'),
                                            value: search,
                                            onChange: (e)=>{
                                                setSearch(e.target.value);
                                                setShowDropdown(true);
                                            },
                                            onFocus: ()=>{
                                                if (suggestions.length > 0) setShowDropdown(true);
                                            },
                                            dir: direction,
                                            autoComplete: "off"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: `absolute ${direction === 'rtl' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-black hover:text-black`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "11",
                                                        cy: "11",
                                                        r: "8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 21l-2-2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        showDropdown && (searching || suggestions.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: dropdownRef,
                                            className: "absolute right-0 left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-[60] max-h-80 overflow-y-auto",
                                            children: searching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center py-4 text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "animate-spin h-5 w-5 mr-2",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                strokeWidth: "4",
                                                                style: {
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z",
                                                                style: {
                                                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('searching')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 271,
                                                columnNumber: 21
                                            }, this) : suggestions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-4 text-center text-gray-400",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('no_results')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 279,
                                                columnNumber: 21
                                            }, this) : suggestions.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-right cursor-pointer",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleProductSelect(product);
                                                    },
                                                    onMouseDown: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleProductSelect(product);
                                                    },
                                                    children: [
                                                        product.thumbnail_full_url?.path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: product.thumbnail_full_url.path,
                                                            alt: getLocalizedProductName(product, language),
                                                            width: 40,
                                                            height: 40,
                                                            className: "rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-1 truncate",
                                                            children: getLocalizedProductName(product, language)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, product.id, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden lg:flex items-center gap-x-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "text-white hover:text-gray-200 text-base font-medium transition-colors",
                                        children: language === 'ar' ? 'من نحن' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('about')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/privacy",
                                        className: "text-white hover:text-gray-200 text-base font-medium transition-colors",
                                        children: language === 'ar' ? 'سياسة الخصوصية' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('privacy_policy')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleLanguage,
                                className: "ml-6 text-white text-lg font-bold focus:outline-none hover:text-gray-200 transition-colors",
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    boxShadow: 'none'
                                },
                                children: langChar
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:hidden items-center justify-between py-3 gap-x-2",
                        dir: direction,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center group min-w-0 flex-shrink-0",
                                "aria-label": "Go to home page",
                                children: logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: logo,
                                    alt: shopName + ' - Store Logo',
                                    width: 32,
                                    height: 32,
                                    className: "h-8 w-8 rounded-full bg-white border border-gray-200 group-hover:opacity-80 transition-opacity",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: (e)=>e.preventDefault(),
                                className: "flex-1 mx-2 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: inputRef,
                                            type: "text",
                                            className: `w-full rounded-md py-2 ${direction === 'rtl' ? 'pl-4 pr-10 text-right' : 'pl-10 pr-4 text-left'} text-black placeholder:text-black/60 bg-white focus:ring-2 focus:ring-black focus:outline-none text-base shadow`,
                                            placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('search_placeholder'),
                                            value: search,
                                            onChange: (e)=>{
                                                setSearch(e.target.value);
                                                setShowDropdown(true);
                                            },
                                            onFocus: ()=>{
                                                if (suggestions.length > 0) setShowDropdown(true);
                                            },
                                            dir: direction,
                                            autoComplete: "off"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: `absolute ${direction === 'rtl' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-black hover:text-black`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "11",
                                                        cy: "11",
                                                        r: "8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 21l-2-2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 346,
                                            columnNumber: 15
                                        }, this),
                                        showDropdown && (searching || suggestions.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: dropdownRef,
                                            className: "absolute right-0 left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-[60] max-h-80 overflow-y-auto",
                                            children: searching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center py-4 text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "animate-spin h-5 w-5 mr-2",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                strokeWidth: "4",
                                                                style: {
                                                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z",
                                                                style: {
                                                                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 23
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('searching')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 356,
                                                columnNumber: 21
                                            }, this) : suggestions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-4 text-center text-gray-400",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('no_results')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 364,
                                                columnNumber: 21
                                            }, this) : suggestions.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-right cursor-pointer",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleProductSelect(product);
                                                    },
                                                    onMouseDown: (e)=>{
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleProductSelect(product);
                                                    },
                                                    children: [
                                                        product.thumbnail_full_url?.path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: product.thumbnail_full_url.path,
                                                            alt: getLocalizedProductName(product, language),
                                                            width: 32,
                                                            height: 32,
                                                            className: "rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-1 truncate",
                                                            children: getLocalizedProductName(product, language)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Header.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, product.id, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleLanguage,
                                className: "text-white text-lg font-bold focus:outline-none hover:text-gray-200 transition-colors flex-shrink-0",
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    boxShadow: 'none'
                                },
                                children: langChar
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "light"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/Copyright.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n.ts [app-ssr] (ecmascript)");
;
;
;
const Copyright = ({ className = '', whiteText = false })=>{
    const { direction, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "https://packages.awisapp.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: `flex items-center justify-center gap-2 text-center text-sm text-gray-400 hover:text-blue-500 transition-colors ${className}`,
        children: direction === 'rtl' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: whiteText ? {
                        color: '#fff'
                    } : {},
                    children: language === 'ar' ? 'بدعم من' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('supported_by')
                }, void 0, false, {
                    fileName: "[project]/src/components/Copyright.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/awis.png",
                    alt: "awis logo",
                    className: "inline h-6 align-middle",
                    style: {
                        display: 'inline'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Copyright.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: whiteText ? {
                        color: '#fff'
                    } : {},
                    children: language === 'ar' ? 'بدعم من' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('supported_by')
                }, void 0, false, {
                    fileName: "[project]/src/components/Copyright.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/awis.png",
                    alt: "awis logo",
                    className: "inline h-6 align-middle",
                    style: {
                        display: 'inline'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Copyright.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/Copyright.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Copyright;
}}),
"[project]/src/components/ContactInfoBlock.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContactInfoBlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/web_constantsthe.ts [app-ssr] (ecmascript)");
;
;
function ContactInfoBlock({ className = '', onlySocial = false, textColor = '#222' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center ${onlySocial ? '' : 'space-y-1'} ${className}`,
        children: [
            !onlySocial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-semibold",
                        style: {
                            color: textColor
                        },
                        dir: "ltr",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].phone
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactInfoBlock.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base",
                        style: {
                            color: textColor
                        },
                        dir: "ltr",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].email
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactInfoBlock.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex ${onlySocial ? 'justify-center gap-8 py-6' : 'space-x-6 mt-2'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].instagram,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Instagram",
                        className: "hover:opacity-80 transition-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/Instagram_icon.png",
                            alt: "Instagram",
                            className: "w-7 h-7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactInfoBlock.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactInfoBlock.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].whatsapp,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "WhatsApp",
                        className: "hover:opacity-80 transition-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/whatsapp-icon.png",
                            alt: "WhatsApp",
                            className: "w-7 h-7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactInfoBlock.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactInfoBlock.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactInfoBlock.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactInfoBlock.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/MobileNavBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MobileNavBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copyright$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Copyright.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/web_constantsthe.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CartIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactInfoBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactInfoBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function MobileNavBar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { language, direction, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [showMore, setShowMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSlidingDown, setIsSlidingDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStartY, setTouchStartY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragY, setDragY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Prevent background scroll when sheet is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showMore) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [
        showMore
    ]);
    const [touchDeltaY, setTouchDeltaY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Handle closing with animation
    const closeSheet = ()=>{
        setIsSlidingDown(true);
        setTimeout(()=>{
            setShowMore(false);
            setIsSlidingDown(false);
        }, 350); // match slide down duration
    };
    // Handle language switching
    const handleLanguageSwitch = ()=>{
        const newLanguage = language === 'ar' ? 'en' : 'ar';
        setLanguage(newLanguage);
        setShowMore(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 shadow-lg lg:hidden flex justify-around items-center h-16",
                style: {
                    background: '#fff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: `flex flex-col items-center justify-center text-xs font-semibold transition-colors group pt-1 w-full${pathname === "/" ? " selected-nav" : ""}`,
                        style: pathname === "/" ? {
                            borderTop: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor}`,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor,
                            background: '#fff'
                        } : {
                            color: '#444',
                            background: '#fff'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 mb-0.5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                style: pathname === "/" ? {
                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                } : {
                                    stroke: '#444'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "3",
                                        y: "3",
                                        width: "7",
                                        height: "7",
                                        rx: "1.5",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "14",
                                        y: "3",
                                        width: "7",
                                        height: "7",
                                        rx: "1.5",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "14",
                                        y: "14",
                                        width: "7",
                                        height: "7",
                                        rx: "1.5",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "3",
                                        y: "14",
                                        width: "7",
                                        height: "7",
                                        rx: "1.5",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            language === 'ar' ? 'القائمة' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('menu')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/MobileNavBar.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/orders",
                        className: `flex flex-col items-center justify-center text-xs font-semibold transition-colors group pt-1 w-full${pathname.startsWith("/orders") ? " selected-nav" : ""}`,
                        style: pathname.startsWith("/orders") ? {
                            borderTop: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor}`,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor,
                            background: '#fff'
                        } : {
                            color: '#444',
                            background: '#fff'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 mb-0.5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                style: pathname.startsWith("/orders") ? {
                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                } : {
                                    stroke: '#444'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "4",
                                        y: "4",
                                        width: "16",
                                        height: "16",
                                        rx: "2",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 10h8M8 14h5",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            language === 'ar' ? 'حالة الطلب' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('order_status')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/MobileNavBar.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cart",
                        className: `relative flex flex-col items-center justify-center text-xs font-semibold transition-colors group pt-1 w-full${pathname.startsWith("/cart") ? " selected-nav" : ""}`,
                        style: pathname.startsWith("/cart") ? {
                            borderTop: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor}`,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor,
                            background: '#fff'
                        } : {
                            color: '#444',
                            background: '#fff'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "dark",
                                noLink: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            language === 'ar' ? 'السلة' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('cart')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/MobileNavBar.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setShowMore(true);
                            setIsSlidingDown(false);
                        },
                        className: `flex flex-col items-center justify-center text-xs font-semibold transition-colors group pt-1 w-full${pathname.startsWith("/more") ? " selected-nav" : ""}`,
                        style: pathname.startsWith("/more") ? {
                            borderTop: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor}`,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor,
                            background: '#fff'
                        } : {
                            color: '#444',
                            background: '#fff'
                        },
                        "aria-label": language === 'ar' ? 'المزيد' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('more'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 mb-0.5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                style: pathname.startsWith("/more") ? {
                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                } : {
                                    stroke: '#444'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "4",
                                        y: "4",
                                        width: "16",
                                        height: "16",
                                        rx: "2",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 8h8M8 12h8M8 16h8",
                                        stroke: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            language === 'ar' ? 'المزيد' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('more')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/MobileNavBar.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/MobileNavBar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            showMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 bg-[rgba(0,0,0,0.2)] transition-opacity",
                        onClick: closeSheet,
                        "aria-label": "إغلاق المزيد"
                    }, void 0, false, {
                        fileName: "[project]/src/app/MobileNavBar.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl overflow-hidden max-h-[60vh] min-h-[60vh] flex flex-col ${isSlidingDown ? 'animate-bottomSheetSlideDown' : 'animate-bottomSheetSlideUp'}`,
                        dir: direction,
                        style: {
                            boxShadow: '0 -8px 32px 0 rgba(0,0,0,0.10)',
                            transform: dragY > 0 ? `translateY(${dragY}px)` : undefined,
                            transition: dragY === 0 ? 'transform 0.25s cubic-bezier(0.4,0,0.2,1)' : undefined
                        },
                        onTouchStart: (e)=>setTouchStartY(e.touches[0].clientY),
                        onTouchMove: (e)=>{
                            if (touchStartY !== null) {
                                const deltaY = e.touches[0].clientY - touchStartY;
                                if (deltaY > 0) setDragY(deltaY);
                            }
                        },
                        onTouchEnd: ()=>{
                            if (dragY > 80) {
                                closeSheet();
                            }
                            setTouchStartY(null);
                            setDragY(0);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: headerRef,
                                className: `flex items-center px-4 py-3 border-b border-gray-200 touch-none select-none cursor-grab active:cursor-grabbing ${direction === 'rtl' ? 'justify-between' : 'justify-between'}`,
                                onTouchStart: (e)=>setTouchStartY(e.touches[0].clientY),
                                onTouchMove: (e)=>{
                                    if (touchStartY !== null) {
                                        const deltaY = e.touches[0].clientY - touchStartY;
                                        if (deltaY > 0) setDragY(deltaY);
                                    }
                                },
                                onTouchEnd: ()=>{
                                    if (dragY > 80) {
                                        setShowMore(false);
                                    }
                                    setTouchStartY(null);
                                    setDragY(0);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-gray-900",
                                        children: language === 'ar' ? 'المزيد' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('more')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeSheet,
                                        "aria-label": language === 'ar' ? 'إغلاق' : 'Close',
                                        className: "text-2xl text-gray-400 hover:text-red-500 focus:outline-none",
                                        children: "❌"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowMore(false);
                                            window.location.href = '/contact';
                                        },
                                        className: `w-full flex items-center px-4 py-4 hover:bg-gray-50 focus:outline-none ${direction === 'rtl' ? 'flex-row text-right' : 'flex-row text-left'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: direction === 'rtl' ? 'ml-3 flex-shrink-0' : 'mr-3 flex-shrink-0',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 16.92V19a2 2 0 01-2 2A18 18 0 013 5a2 2 0 012-2h2.09a1 1 0 01.95.68l1.13 3.39a1 1 0 01-.23 1.09l-1.27 1.27a16 16 0 006.6 6.6l1.27-1.27a1 1 0 011.09-.23l3.39 1.13a1 1 0 01.68.95z",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex-1 text-base font-medium text-gray-900 ${direction === 'rtl' ? 'text-right' : 'text-left'}`,
                                                children: language === 'ar' ? 'اتصل بنا' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('contact')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: direction === 'rtl' ? 'mr-3 flex-shrink-0 text-gray-400' : 'ml-3 flex-shrink-0 text-gray-400',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: direction === 'rtl' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7',
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowMore(false);
                                            window.location.href = '/about';
                                        },
                                        className: `w-full flex items-center px-4 py-4 hover:bg-gray-50 focus:outline-none ${direction === 'rtl' ? 'flex-row text-right' : 'flex-row text-left'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: direction === 'rtl' ? 'ml-3 flex-shrink-0' : 'mr-3 flex-shrink-0',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/MobileNavBar.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 16v-4",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/MobileNavBar.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "8",
                                                            r: "1",
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/MobileNavBar.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex-1 text-base font-medium text-gray-900 ${direction === 'rtl' ? 'text-right' : 'text-left'}`,
                                                children: language === 'ar' ? 'من نحن' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('about')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: direction === 'rtl' ? 'mr-3 flex-shrink-0 text-gray-400' : 'ml-3 flex-shrink-0 text-gray-400',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: direction === 'rtl' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7',
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-2 border-t border-gray-100"
                            }, void 0, false, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowMore(false);
                                            window.location.href = '/privacy';
                                        },
                                        className: `w-full flex items-center px-4 py-4 hover:bg-gray-50 focus:outline-none ${direction === 'rtl' ? 'flex-row text-right' : 'flex-row text-left'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: direction === 'rtl' ? 'ml-3 flex-shrink-0' : 'mr-3 flex-shrink-0',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "4",
                                                            y: "4",
                                                            width: "16",
                                                            height: "16",
                                                            rx: "2",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/MobileNavBar.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M8 8h8M8 12h8M8 16h8",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/MobileNavBar.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex-1 text-base font-medium text-gray-900 ${direction === 'rtl' ? 'text-right' : 'text-left'}`,
                                                children: language === 'ar' ? 'سياسة الخصوصية' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('privacy_policy')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: direction === 'rtl' ? 'mr-3 flex-shrink-0 text-gray-400' : 'ml-3 flex-shrink-0 text-gray-400',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: direction === 'rtl' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7',
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLanguageSwitch,
                                        className: `w-full flex items-center px-4 py-4 hover:bg-gray-50 focus:outline-none ${direction === 'rtl' ? 'flex-row text-right' : 'flex-row text-left'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: direction === 'rtl' ? 'ml-3 flex-shrink-0' : 'mr-3 flex-shrink-0',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$web_constantsthe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEB_CONSTANTS"].primaryColor
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 4v16m8-8H4",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex-1 text-base font-medium text-gray-900 ${direction === 'rtl' ? 'text-right' : 'text-left'}`,
                                                children: [
                                                    language === 'ar' ? 'اللغة' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].t('language'),
                                                    " (",
                                                    language === 'ar' ? 'العربية' : 'English',
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: direction === 'rtl' ? 'mr-3 flex-shrink-0 text-gray-400' : 'ml-3 flex-shrink-0 text-gray-400',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: direction === 'rtl' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7',
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/MobileNavBar.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactInfoBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "py-6",
                                onlySocial: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copyright$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "mt-2 mb-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/payment-logos.png",
                                    alt: "طرق الدفع",
                                    className: "h-8 object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/MobileNavBar.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/MobileNavBar.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/MobileNavBar.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
}}),
"[project]/src/components/OfflineNotification.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OfflineNotification)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function OfflineNotification() {
    const [isOffline, setIsOffline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRetryMessage, setShowRetryMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initial state
        setIsOffline(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cache"].isOffline());
        // Subscribe to online/offline status changes
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cache"].onOnlineStatusChange((online)=>{
            setIsOffline(!online);
            if (online) {
                // Show brief "back online" message
                setShowRetryMessage(true);
                setTimeout(()=>setShowRetryMessage(false), 3000);
            }
        });
        return unsubscribe;
    }, []);
    if (!isOffline && !showRetryMessage) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 right-0 z-50",
        children: isOffline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-600 text-white px-4 py-2 text-center text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OfflineNotification.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/OfflineNotification.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: language === 'ar' ? 'لا يوجد اتصال بالإنترنت. يتم عرض المحتوى المحفوظ.' : 'No internet connection. Showing cached content.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/OfflineNotification.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OfflineNotification.tsx",
                lineNumber: 35,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/OfflineNotification.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this) : showRetryMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-green-600 text-white px-4 py-2 text-center text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/OfflineNotification.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/OfflineNotification.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: language === 'ar' ? 'عاد الاتصال بالإنترنت. يتم تحديث المحتوى...' : 'Back online. Refreshing content...'
                    }, void 0, false, {
                        fileName: "[project]/src/components/OfflineNotification.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/OfflineNotification.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/OfflineNotification.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/src/components/OfflineNotification.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/ClientLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_f8791666$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_f8791666.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_fffeda03$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_fffeda03.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$MobileNavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/MobileNavBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OfflineNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OfflineNotification.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function ClientLayout({ seller, children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Scroll to top when pathname changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        pathname
    ]);
    // Periodic cache cleanup and service worker registration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Clean cache on app start
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cache"].cleanup();
        // Set up periodic cleanup every 30 minutes
        const cleanupInterval = setInterval(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cache"].cleanup();
        }, 30 * 60 * 1000);
        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').then((registration)=>{
                console.log('Service Worker registered:', registration);
            }).catch((error)=>{
                console.log('Service Worker registration failed:', error);
            });
        }
        return ()=>clearInterval(cleanupInterval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_f8791666$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_fffeda03$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].variable} antialiased`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartProvider"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OfflineNotification$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/ClientLayout.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        seller: seller
                    }, void 0, false, {
                        fileName: "[project]/src/app/ClientLayout.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$MobileNavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/ClientLayout.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ClientLayout.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/ClientLayout.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ClientLayout.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9c532262._.js.map