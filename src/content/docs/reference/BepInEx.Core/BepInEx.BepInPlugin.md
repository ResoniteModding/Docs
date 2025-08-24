---
title: BepInPlugin Class
slug: reference/bepinex.bepinplugin
sidebar:
  label: BepInPlugin
---
## Definition

This attribute denotes that a class is a plugin, and specifies the required metadata.

```csharp title="C#"
[AttributeUsage(AttributeTargets.Class)]
public class BepInPlugin : Attribute
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute/)

## Constructors

### BepInPlugin(string, string, string)

```csharp title="C#"
public BepInPlugin(string GUID, string Name, string Version)
```

#### Parameters

`GUID` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The unique identifier of the plugin. Should not change between plugin versions.

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The user friendly name of the plugin. Is able to be changed between versions.

`Version` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The specific version of the plugin.


## Properties

### GUID

The unique identifier of the plugin. Should not change between plugin versions.

```csharp title="C#"
public string GUID { get; protected set; }
```

### Name

The user friendly name of the plugin. Is able to be changed between versions.

```csharp title="C#"
public string Name { get; protected set; }
```

### Version

The specific version of the plugin.

```csharp title="C#"
public Version Version { get; protected set; }
```