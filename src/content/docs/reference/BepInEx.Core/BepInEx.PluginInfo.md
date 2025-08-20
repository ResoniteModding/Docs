---
title: PluginInfo Class
slug: reference/bepinex.plugininfo
sidebar:
  label: PluginInfo
---

## Definition

Data class that represents information about a loadable BepInEx plugin. Contains all metadata and additional info required for plugin loading by Chainloader.

```csharp title="C#"
public class PluginInfo : ICacheable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [ICacheable](../bepinex.bootstrap.icacheable/)

## Properties

### Metadata

General metadata about a plugin.

```csharp title="C#"
public BepInPlugin Metadata { get; }
```

### Processes

Collection of [BepInProcess](../bepinex.bepinprocess/) attributes that describe what processes the plugin can run on.

```csharp title="C#"
public IEnumerable<BepInProcess> Processes { get; }
```

### Dependencies

Collection of [BepInDependency](../bepinex.bepindependency/) attributes that describe what plugins this plugin depends on.

```csharp title="C#"
public IEnumerable<BepInDependency> Dependencies { get; }
```

### Incompatibilities

Collection of [BepInIncompatibility](../bepinex.bepinincompatibility/) attributes that describe what plugins this plugin is incompatible with.

```csharp title="C#"
public IEnumerable<BepInIncompatibility> Incompatibilities { get; }
```

### Location

File path to the plugin DLL

```csharp title="C#"
public string Location { get; }
```

### Instance

Instance of the plugin that represents this info. NULL if no plugin is instantiated from info (yet)

```csharp title="C#"
public object Instance { get; }
```

### TypeName

```csharp title="C#"
public string TypeName { get; }
```

## Methods

### ToString()

Returns a string that represents the current object.

```csharp title="C#"
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
A string that represents the current object.
