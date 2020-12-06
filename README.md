#  Minimal reproduction of minimal-cipher not working with jest 25 and up

## `minimal-cipher@1.4.0` works with jest 24:

```
cd works
npm i
npm t
```

The test passes

## `minimal-cipher@1.4.0` doesnt work with jest 25 (and up)

```
cd works
npm i
npm t
```

The test crashes
