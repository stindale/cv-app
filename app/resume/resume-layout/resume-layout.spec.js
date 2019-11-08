'use strict';

describe('resume layout', function() {
  var $compile,
      $rootScope;

  beforeEach(module('resume'));
  beforeEach(module("my.templates"));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive
    var element = $compile("<resume-layout></resume-layout>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain("md-card");
    expect(element.html()).toContain("something it won't have");
  });
});