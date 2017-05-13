describe('HelloWorld Server', function () {
  var t;

  beforeEach(function () {
    t = true;
  });
  afterEach(function () {
    t = null;
  });
  it('Should perform simple test', function () {
    expect(t).toBeTruthy();
  });
});
