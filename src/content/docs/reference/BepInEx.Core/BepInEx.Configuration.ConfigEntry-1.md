---
title: ConfigEntry<T> Class
slug: reference/bepinex.configuration.configentry-1
sidebar:
  label: ConfigEntry<T>
---
## Definition

Provides access to a single setting inside of a [ConfigFile](../bepinex.configuration.configfile/).

```csharp title="C#"
public sealed class ConfigEntry<T> : ConfigEntryBase
```

### Type Parameters

`T`  
Type of the setting.

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [ConfigEntryBase](../bepinex.configuration.configentrybase/)

## Properties

### Value

Value of this setting.

```csharp title="C#"
public T Value { get; set; }
```

### BoxedValue

Get or set the value of the setting.

```csharp title="C#"
public override object BoxedValue { get; set; }
```

## Events

### SettingChanged

Fired when the setting is changed. Does not detect changes made outside from this object.

```csharp title="C#"
public event EventHandler SettingChanged
```

#### Event Type

[EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler/)