self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

// (Optional) Add caching later if you want offline. For now, keep it simple:
self.addEventListener('fetch', () => {});
