---
title: ConfigEntryBase Class
slug: reference/bepinex.configuration.configentrybase
sidebar:
  label: ConfigEntryBase
---
## Definition

Container for a single setting of a [ConfigFile](../bepinex.configuration.configfile/). Each config entry is linked to one config file.

```csharp title="C#"
public abstract class ConfigEntryBase
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Constructors

### ConfigEntryBase(ConfigFile, ConfigDefinition, Type, object, ConfigDescription)

Types of defaultValue and definition.AcceptableValues have to be the same as settingType.

```csharp title="C#"
protected ConfigEntryBase(ConfigFile configFile, ConfigDefinition definition, Type settingType, object defaultValue, ConfigDescription configDescription)
```

#### Parameters

`configFile` [ConfigFile](../bepinex.configuration.configfile/)  

`definition` [ConfigDefinition](../bepinex.configuration.configdefinition/)  

`settingType` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  

`defaultValue` [object](https://learn.microsoft.com/dotnet/api/system.object/)  

`configDescription` [ConfigDescription](../bepinex.configuration.configdescription/)  


## Properties

### ConfigFile

Config file this entry is a part of.

```csharp title="C#"
public ConfigFile ConfigFile { get; }
```

### Definition

Category and name of this setting. Used as a unique key for identification within a [ConfigFile](../bepinex.configuration.configfile/).

```csharp title="C#"
public ConfigDefinition Definition { get; }
```

### Description

Description / metadata of this setting.

```csharp title="C#"
public ConfigDescription Description { get; }
```

### SettingType

Type of the [BoxedValue](../bepinex.configuration.configentrybase/#boxedvalue/) that this setting holds.

```csharp title="C#"
public Type SettingType { get; }
```

### DefaultValue

Default value of this setting (set only if the setting was not changed before).

```csharp title="C#"
public object DefaultValue { get; }
```

### BoxedValue

Get or set the value of the setting.

```csharp title="C#"
public abstract object BoxedValue { get; set; }
```

## Methods

### GetSerializedValue()

Get the serialized representation of the value.

```csharp title="C#"
public string GetSerializedValue()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)

### SetSerializedValue(string)

Set the value by using its serialized form.

```csharp title="C#"
public void SetSerializedValue(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string/)  


### ClampValue<T>(T)

If necessary, clamp the value to acceptable value range. T has to be equal to settingType.

```csharp title="C#"
protected T ClampValue<T>(T value)
```

#### Parameters

`value` T  

#### Returns

T

### OnSettingChanged(object)

Trigger setting changed event.

```csharp title="C#"
protected void OnSettingChanged(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object/)  


### WriteDescription(StreamWriter)

Write a description of this setting using all available metadata.

```csharp title="C#"
public void WriteDescription(StreamWriter writer)
```

#### Parameters

`writer` [StreamWriter](https://learn.microsoft.com/dotnet/api/system.io.streamwriter/)