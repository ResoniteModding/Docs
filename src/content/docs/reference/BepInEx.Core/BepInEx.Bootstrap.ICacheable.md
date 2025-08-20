---
title: ICacheable Interface
slug: reference/bepinex.bootstrap.icacheable
sidebar:
  label: ICacheable
---

## Definition

A cacheable metadata item. Can be used with [LoadAssemblyCache\<T\>(string)](../bepinex.bootstrap.typeloader.loadassemblycache/#/) and `BepInEx.Bootstrap.TypeLoader.SaveAssemblyCache``1(System.String%2cSystem.Collections.Generic.Dictionary%7bSystem.String%2cSystem.Collections.Generic.List%7b``0%7d%7d%2cSystem.Collections.Generic.Dictionary%7bSystem.String%2cSystem.String%7d)` to cache plugin metadata.

```csharp title="C#"
public interface ICacheable
```

## Methods

### Save(BinaryWriter)

Serialize the object into a binary format.

```csharp title="C#"
void Save(BinaryWriter bw)
```

#### Parameters

`bw` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter/)

### Load(BinaryReader)

Loads the object from binary format.

```csharp title="C#"
void Load(BinaryReader br)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader/)
