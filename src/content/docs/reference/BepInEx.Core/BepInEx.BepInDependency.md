---
title: BepInDependency Class
slug: reference/bepinex.bepindependency
sidebar:
  label: BepInDependency
---
## Definition

This attribute specifies any dependencies that this plugin has on other plugins.

```csharp title="C#"
[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
public class BepInDependency : Attribute, ICacheable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute/)

Implements [ICacheable](../bepinex.bootstrap.icacheable/)

## Constructors

### BepInDependency(string, DependencyFlags)

Marks this BaseUnityPlugin as dependent on another plugin. The other plugin will be loaded before this one. If the other plugin doesn't exist, what happens depends on the [Flags](../bepinex.bepindependency.flags/#flags/) parameter.

```csharp title="C#"
public BepInDependency(string DependencyGUID, BepInDependency.DependencyFlags Flags = DependencyFlags.HardDependency)
```

#### Parameters

`DependencyGUID` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The GUID of the referenced plugin.

`Flags` [BepInDependency.DependencyFlags](../bepinex.bepindependency/)  
The flags associated with this dependency definition.


### BepInDependency(string, string)

Marks this BaseUnityPlugin as dependent on another plugin. The other plugin will be loaded before this one. If the other plugin doesn't exist or is of a version not satisfying [VersionRange](../bepinex.bepindependency.versionrange/#versionrange/), this plugin will not load and an error will be logged instead.

```csharp title="C#"
public BepInDependency(string guid, string version)
```

#### Parameters

`guid` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The GUID of the referenced plugin.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The version range of the referenced plugin.

#### Remarks

When version is supplied the dependency is always treated as HardDependency

## Properties

### DependencyGUID

The GUID of the referenced plugin.

```csharp title="C#"
public string DependencyGUID { get; protected set; }
```

### Flags

The flags associated with this dependency definition.

```csharp title="C#"
public BepInDependency.DependencyFlags Flags { get; protected set; }
```

### VersionRange

The version SemVer.Range of the referenced plugin.

```csharp title="C#"
public Range VersionRange { get; protected set; }
```