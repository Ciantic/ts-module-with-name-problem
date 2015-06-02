/// <reference path="./node_modules/other-module/index.d.ts" />
/// <reference path="./node_modules/some-other-module/index.d.ts" />
var Other = require('other-module');
var SomeOther = require('some-other-module');
Other.something();
SomeOther.something();
