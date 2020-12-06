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

## CI

See https://github.com/gjgd/minimal-cipher-jest-bug/actions for a demo of the bug in CI

## Possible explanation

From the [Jest 25 changelog](https://jestjs.io/blog/2020/01/21/jest-25)

```
The main changes are an upgrade of JSDOM from v11 to v15, 10-15% faster test runs, a new diff view for outdated snapshots and dropped Node 6 support.
```

So, it looks like `minimal-cipher@1.4.0` breaks with JSDOM v15
