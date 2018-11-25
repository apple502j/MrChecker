/*
Copyright (C) 2018 apple502j
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

BEFORE="";

window.addEventListener("load",function(){
    if (!re) {console.error("Cannot find regex file");}else{
        // Any code should be put here
        var textbox=document.getElementById("textbox");
        textbox.addEventListener("input",function(){
            try {var textbox=document.getElementById("textbox");
            } catch(e) {/* pass */}
            var text=textbox.innerText;
            if (text==BEFORE) return; else BEFORE=text;
            var matches = text.match(re);
            var num=document.getElementById("num");
            if (!matches) {
                num.parentElement.style.display="none";
                return;
            }
            for (var match of matches) {
                text=text.replace(new RegExp(`(?!<span class="wrong">)${match}`, "g"), `<span class="wrong">${match}</span>`);
            }
            textbox.innerHTML=text;
            num.parentElement.style.display="inline";
            num.innerText=matches.length;
        });
    }
});
