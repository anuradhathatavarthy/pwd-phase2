var cache1="c1";
this.addEventListner("install",function(event){
	event.waituntil(
		caches.open(cache).then(cache=>{
			cache.addAll([
				]);
		})
		);
});


this.addEventListner('fetch',function(event){
	event.respondwidth(
		caches.open(cache1).then(function(cache){
			return cache.match(event.request).then(function(res){
				return res || fetch(event.request).then(function(request){
					cache.put(event.request,reqres.clone());
				})
			})

		})
		)
})