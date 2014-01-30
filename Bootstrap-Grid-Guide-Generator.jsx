/*
---
description: Create guides and gutters to the template bootstrap

license: MIT-style

authors:
- Marco Dell'Anna

*/

/*
* Bootstrap Grid Guide Generator for Adobe Photoshop
* Version 1.0
* Copyright (c) 2014 Marco Dell'Anna - http://www.plasm.it
*
* Requires: Adobe Photoshop
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
* Log:
* 1.0 - Inizio implementazione release stabile
*/




// Set preferences
var defaultRulerUnits      = preferences.rulerUnits;
    preferences.rulerUnits = Units.PIXELS;

function GriGenerator(cols, unitVertical, gutterVertical) {
  // Real size column
  unitVertical = unitVertical + (gutterVertical*2)

  // New document
  var newDocumentRef = documents.add(unitVertical*cols, 1200, 72.0, "Bootstrap 3 Template");
  var doc            = app.activeDocument;
  var guides         = app.activeDocument.guides;

  if (unitVertical !== 0) {
    var j = cols;
    for (var i = 0; i < j; i++) {
      guides.add(Direction.VERTICAL,(i * unitVertical));
      guides.add(Direction.VERTICAL,(i * unitVertical) + gutterVertical);
      guides.add(Direction.VERTICAL,(i * unitVertical) + gutterVertical + (unitVertical-(gutterVertical*2)));
    }
    guides.add(Direction.VERTICAL, 0 + (i * unitVertical));
  }
}

var cols   = Number ( prompt ( 'Numero di colonne:' , 12 ) );
var width  = Number ( prompt ( 'Larghezza della singola colonna:' , 68 ) );
var gutter = Number ( prompt ( 'Gutter' , 15 ) );

GriGenerator(cols, width, gutter);
