// Feature	var	let	const
// Scope	Function-scoped	Block-scoped	Block-scoped
// Hoisted	Yes (undefined)	Yes (TDZ error)	Yes (TDZ error)
// Redeclare	✅ Allowed	❌ Not allowed	❌ Not allowed
// Reassign	✅ Allowed	✅ Allowed	❌ Not allowed
// Use case	Legacy only	Mutable vars	Immutable vars

// 👉 In TypeScript/modern JS, you should use:

// const by default

// let if you know it will change

// Avoid var