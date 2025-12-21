/*
Big idea first 🧠
== → loose equality

✅ Converts types before comparing

❌ Can give surprising results

=== → strict equality

✅ Compares type + value

🚫 No conversion

🧠 Golden rule (memorize):

Always use === unless you really know why you need ==.

*/



/*
Let’s see with examples 👇
Example 1
"5" == 5    // true 😮
"5" === 5   // false ✅


Why?

== converts "5" → 5

=== says: string ≠ number

Example 2 (classic interview trap)
0 == false   // true 😱
0 === false  // false ✅


Because:

false → 0 (in loose comparison)

Example 3
null == undefined    // true 😐
null === undefined   // false ✅

Truth table (small & powerful)
Comparison	Result
" " == 0	true 😱
"" == 0	true 😱
"" === 0	false
NaN == NaN	false
NaN === NaN	false

🧠 Use:

Number.isNaN(x)

When is == actually acceptable?

Very rare, but one valid case:

if (value == null) {
  // catches both null and undefined
}


Because:

null == undefined // true

Interview one-liner (say this confidently 😎)

"== allows type coercion and can cause bugs.
=== checks both type and value, so it’s safer and preferred."

🎯 Quick check (last one):

What will this be?

"" == false


Answer it (even if unsure), then I’ll confirm and explain.

*/