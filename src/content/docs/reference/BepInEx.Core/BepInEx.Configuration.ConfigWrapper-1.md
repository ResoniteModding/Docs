---
title: ConfigWrapper<T> Class
slug: reference/bepinex.configuration.configwrapper-1
sidebar:
  label: ConfigWrapper<T>
---

## Definition

:::caution[Obsolete]
Use ConfigFile from new Bind overloads instead
:::
Provides access to a single setting inside of a [ConfigFile](../bepinex.configuration.configfile/).

```csharp title="C#"
[Obsolete("Use ConfigFile from new Bind overloads instead")]
public sealed class ConfigWrapper<T>
```

### Type Parameters

`T`  
Type of the setting.

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Properties

### ConfigEntry

Entry of this setting in the [ConfigFile](../bepinex.configuration.configfile/).

```csharp title="C#"
public ConfigEntry<T> ConfigEntry { get; }
```

### Definition

Unique definition of this setting.

```csharp title="C#"
public ConfigDefinition Definition { get; }
```

### ConfigFile

Config file this setting is inside of.

```csharp title="C#"
public ConfigFile ConfigFile { get; }
```

### Value

Value of this setting.

```csharp title="C#"
public T Value { get; set; }
```

## Events

### SettingChanged

Fired when the setting is changed. Does not detect changes made outside from this object.

```csharp title="C#"
public event EventHandler SettingChanged
```

#### Event Type

[EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler/)
