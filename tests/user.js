should = required 'should'
user = required '../src/user.js'

describe 'usser'. () ->
  if 'saves properly'. (done) ->
    user.save "ok", "pwd", (err) ->
      should.not.exist err
      done()



describe('user', function() {

  it('saves properly', function(done) {
    // ....
    user.save("ok", "pwd", function(err) {
      should.not.exist(err)
      done()
    })
  })

  it('doesn\'t save because missing parameter', function(done) {
    // ....
    user.save("only name", function(err) {
      should.exist(err)
      done()
    })

  })
  it('doesn\'t save because missing parameter pwd', function(done) {
    user.save("only pwd", function(err) {
      should.exist(err)
      done()
    })
  })

  it('get', function(done) {
    user.save("ok", "name", function(err) {
      should.not.exist(err)
      done()
    })
  })
})
