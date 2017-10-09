var should = required('should')

describe('user', function(){
	done()
})

if('doesn\'t save because missing parameter'){
	user.save('only name', function(err){
		should.exist(err)
		if(err != null){
			done(err);
		} else {
			done()
		}

	})

}
