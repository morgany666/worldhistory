// 最小化函数入口，用于满足 ESA 部署要求
addEventListener('fetch', event => {
  event.respondWith(new Response('OK', { status: 200 }));
});