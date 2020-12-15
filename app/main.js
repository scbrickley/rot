const wasm = import('../pkg/rot')

wasm.then(h => h.hello("world")).catch(console.error)
