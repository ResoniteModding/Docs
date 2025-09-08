---
title: BepInEx.Bootstrap
slug: reference/bepinex.bootstrap
sidebar:
  order: 0
---
## Classes

| | |
| --- | --- |
| [BaseChainloader<TPlugin>\<TPlugin\>](../bepinex.bootstrap.basechainloader-1/) |  |
| [CachedAssembly<T>\<T\>](../bepinex.bootstrap.cachedassembly-1/) | A cached assembly. |
| [TypeLoader](../bepinex.bootstrap.typeloader/) | Provides methods for loading specified types from an assembly. |
## Interfaces

| | |
| --- | --- |
| [ICacheable](../bepinex.bootstrap.icacheable/) | A cacheable metadata item. Can be used with [LoadAssemblyCache\<T\>(string)](../bepinex.bootstrap.typeloader/#/) and `BepInEx.Bootstrap.TypeLoader.SaveAssemblyCache``1(System.String%2cSystem.Collections.Generic.Dictionary%7bSystem.String%2cSystem.Collections.Generic.List%7b``0%7d%7d%2cSystem.Collections.Generic.Dictionary%7bSystem.String%2cSystem.String%7d)` to cache plugin metadata. |