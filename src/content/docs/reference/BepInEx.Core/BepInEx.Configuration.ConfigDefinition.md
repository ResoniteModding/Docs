---
title: ConfigDefinition Class
slug: reference/bepinex.configuration.configdefinition
sidebar:
  label: ConfigDefinition
---
## Definition

Section and key of a setting. Used as a unique key for identification within a [ConfigFile](../bepinex.configuration.configfile/). The same definition can be used in multiple config files, it will point to different settings then.

```csharp title="C#"
public class ConfigDefinition : IEquatable<ConfigDefinition>
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [IEquatable\<ConfigDefinition\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1/)

## Constructors

### ConfigDefinition(string, string)

Create a new definition. Definitions with same section and key are equal.

```csharp title="C#"
public ConfigDefinition(string section, string key)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Group of the setting, case sensitive.

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the setting, case sensitive.


### ConfigDefinition(string, string, string)

:::caution[Obsolete]
description argument is no longer used, put it in a ConfigDescription instead
:::
```csharp title="C#"
[Obsolete("description argument is no longer used, put it in a ConfigDescription instead")]
public ConfigDefinition(string section, string key, string description)
```

#### Parameters

`section` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`key` [string](https://learn.microsoft.com/dotnet/api/system.string/)  

`description` [string](https://learn.microsoft.com/dotnet/api/system.string/)  


## Properties

### Section

Group of the setting. All settings within a config file are grouped by this.

```csharp title="C#"
public string Section { get; }
```

### Key

Name of the setting.

```csharp title="C#"
public string Key { get; }
```

## Methods

### Equals(ConfigDefinition)

Check if the definitions are the same.

```csharp title="C#"
public bool Equals(ConfigDefinition other)
```

#### Parameters

`other` [ConfigDefinition](../bepinex.configuration.configdefinition/)  
An object to compare with this object.

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the `other` parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### Equals(object)

Check if the definitions are the same.

```csharp title="C#"
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object/)  

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### GetHashCode()

Serves as the default hash function.

```csharp title="C#"
public override int GetHashCode()
```

#### Returns

[int](https://learn.microsoft.com/dotnet/api/system.int32/)  
A hash code for the current object.

### ToString()

Returns a string that represents the current object.

```csharp title="C#"
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
A string that represents the current object.