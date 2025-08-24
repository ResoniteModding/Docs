---
title: BepInIncompatibility Class
slug: reference/bepinex.bepinincompatibility
sidebar:
  label: BepInIncompatibility
---
## Definition

This attribute specifies other plugins that are incompatible with this plugin.

```csharp title="C#"
[AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
public class BepInIncompatibility : Attribute, ICacheable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute/)

Implements [ICacheable](../bepinex.bootstrap.icacheable/)

## Constructors

### BepInIncompatibility(string)

Marks this BaseUnityPlugin as incompatible with another plugin. If the other plugin exists, this plugin will not be loaded and a warning will be shown.

```csharp title="C#"
public BepInIncompatibility(string IncompatibilityGUID)
```

#### Parameters

`IncompatibilityGUID` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The GUID of the referenced plugin.


## Properties

### IncompatibilityGUID

The GUID of the referenced plugin.

```csharp title="C#"
public string IncompatibilityGUID { get; protected set; }
```