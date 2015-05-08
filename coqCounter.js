$.fn.coqCounter = function(output) {
    $(this).change(function(){
        var regex = /[\n^]([a-zA-Z_'0-9]+)/g;
        var value = $(this).val();
        var matches = [], i = 0;

        do {
            match = regex.exec(value);
            if (match != null) {
                matches[i++] = match[1];
            }
        } while (match != null);

        matches.sort();

        var counts = {};
        matches.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

        var counts_output = [], i = 0;
        for (cmd in counts) {
            counts_output[i++] = counts[cmd] + "x " + cmd;
        }

        console.log(counts_output);

        $(output).val(counts_output.join(", "));
    });

    return this;
};