---
title: AcceptableValueBase Class
slug: reference/bepinex.configuration.acceptablevaluebase
sidebar:
  label: AcceptableValueBase
---

## Definition

Base type of all classes representing and enforcing acceptable values of config settings.

```csharp title="C#"
public abstract class AcceptableValueBase
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Constructors

### AcceptableValueBase(Type)

```csharp title="C#"
protected AcceptableValueBase(Type valueType)
```

#### Parameters

`valueType` [Type](https://learn.microsoft.com/dotnet/api/system.type/)  
Type of values that this class can Clamp.

## Properties

### ValueType

Type of the supported values.

```csharp title="C#"
public Type ValueType { get; }
```

## Methods

### Clamp(object)

Change the value to be acceptable, if it's not already.

```csharp title="C#"
public abstract object Clamp(object value)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object/)

#### Returns

[object](https://learn.microsoft.com/dotnet/api/system.object/)

### IsValid(object)

Check if the value is an acceptable value.

```csharp title="C#"
public abstract bool IsValid(object value)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object/)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### ToDescriptionString()

Get the string for use in config files.

```csharp title="C#"
public abstract string ToDescriptionString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)
