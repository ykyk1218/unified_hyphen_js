(function() {
  if (typeof String.prototype.unify_ja_hyphen === "undefined") {
    String.prototype.unify_ja_hyphen = function(replace_str) {
      var replace_str = replace_str || "-"
      var org_str = this.toString()
      return org_str.replace(/ー|−|―|-|‐|‑|–|—|ｰ/g, replace_str)
    }
  }
})();

