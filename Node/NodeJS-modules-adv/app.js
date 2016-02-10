/**
 * http://usejsdoc.org/
 */

// var foo=require("./package1/foo");
// var foo = require('./package1');
// foo.doWork();

var fs = require("fs");
var _ = require('underscore');
var express=require('express');

//var greet=require('./hello-module');
//greet.sayHello();

var Person=require('./Person');

var p1=new Person('Nag',32);
p1.sayName();
