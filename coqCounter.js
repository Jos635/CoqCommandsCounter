/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015 Camil Staps <info@camilstaps.nl>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function($){
    $.fn.coqCounter = function(output) {
        $(this).change(function(){
            var regex = /(?:^|\n)([a-z][a-zA-Z_']*|LEM)/g;
            var value = $(this).val();
            var matches = [], i = 0;

            do {
                match = regex.exec(value);
                if (match != null) {
                    matches[i++] = match[1];
                }
            } while (match != null);

            if (matches.length == 0) {
                $(output).val("No Coq commands found.");
            } else {
                matches.sort();

                var counts = {};
                matches.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

                var counts_output = [], i = 0;
                for (cmd in counts) {
                    counts_output[i++] = counts[cmd] + "x " + cmd;
                }

                $(output).val(counts_output.join(", "));
            }
        });

        return this;
    };
})(jQuery);