---
title: CachedAssembly<T> Class
slug: reference/bepinex.bootstrap.cachedassembly-1
sidebar:
  label: CachedAssembly<T>
---
## Definition

A cached assembly.

```csharp title="C#"
public class CachedAssembly<T> where T : ICacheable
```

### Type Parameters

`T`  


Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Properties

### CacheItems

List of cached items inside the assembly.

```csharp title="C#"
public List<T> CacheItems { get; set; }
```

### Hash

Hash of the assembly. Used to verify that the assembly hasn't been changed.

```csharp title="C#"
public string Hash { get; set; }
```