# pp-sc-yw-repro

Compare
```
$ cd mono
$ yarn
$ yarn workspace components run build
$ yarn workspace components start
```

to
```
$ cd single
$ yarn
$ yarn build
$ yarn start
```

## Why do I think this has anything todo with patternplate?

Notice that

```
$ node single/no-pp.js
```
```
$ node mono/no-pp.js
```
```
$ node mono/packages/components/no-pp.js
```

all have the same output.
