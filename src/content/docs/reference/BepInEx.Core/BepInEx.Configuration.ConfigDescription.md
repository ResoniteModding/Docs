---
title: ConfigDescription Class
slug: reference/bepinex.configuration.configdescription
sidebar:
  label: ConfigDescription
---
## Definition

Metadata of a [ConfigEntryBase](../bepinex.configuration.configentrybase/).

```csharp title="C#"
public class ConfigDescription
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Constructors

### ConfigDescription(string, AcceptableValueBase, params object[])

Create a new description.

```csharp title="C#"
public ConfigDescription(string description, AcceptableValueBase acceptableValues = null, params object[] tags)
```

#### Parameters

`description` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Text describing the function of the setting and any notes or warnings.

`acceptableValues` [AcceptableValueBase](../bepinex.configuration.acceptablevaluebase/)  
Range of values that this setting can take. The setting's value will be automatically
clamped.

`tags` [object[]](https://learn.microsoft.com/dotnet/api/system.object/)  
Objects that can be used by user-made classes to add functionality.


## Properties

### Description

Text describing the function of the setting and any notes or warnings.

```csharp title="C#"
public string Description { get; }
```

### AcceptableValues

Range of acceptable values for a setting.

```csharp title="C#"
public AcceptableValueBase AcceptableValues { get; }
```

### Tags

Objects that can be used by user-made classes to add functionality.

```csharp title="C#"
public object[] Tags { get; }
```

### Empty

An empty description.

```csharp title="C#"
public static ConfigDescription Empty { get; }
```