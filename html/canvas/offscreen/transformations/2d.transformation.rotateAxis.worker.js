// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.rotateAxis
// Description:rotateAxis() results in the correct transformation matrix
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("rotateAxis() results in the correct transformation matrix");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

// angles are in radians, test something that is not a multiple of pi
const angle = 2;
const axis = {x: 1, y: 2, z: 3}
const domMatrix = new DOMMatrix();
ctx.rotateAxis(axis.x, axis.y, axis.z, angle);
domMatrix.rotateAxisAngleSelf(axis.x, axis.y, axis.z, rad2deg(angle));
_assertMatricesApproxEqual(domMatrix, ctx.getTransform());
ctx.rotateAxis(axis.x, axis.y, axis.z, angle);
domMatrix.rotateAxisAngleSelf(axis.x, axis.y, axis.z, rad2deg(angle));
_assertMatricesApproxEqual(domMatrix, ctx.getTransform());
t.done();

});
done();
