---
title: AcceptableValueList<T> Class
slug: reference/bepinex.configuration.acceptablevaluelist-1
sidebar:
  label: AcceptableValueList<T>
---

## Definition

Specify the list of acceptable values for a setting.

```csharp title="C#"
public class AcceptableValueList<T> : AcceptableValueBase where T : IEquatable<T>
```

### Type Parameters

`T`

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [AcceptableValueBase](../bepinex.configuration.acceptablevaluebase/)

## Constructors

### AcceptableValueList(params T[])

Specify the list of acceptable values for a setting. If the setting does not equal any of the values, it will be set to the first one.

```csharp title="C#"
public AcceptableValueList(params T[] acceptableValues)
```

#### Parameters

`acceptableValues` T[]

## Properties

### AcceptableValues

List of values that a setting can take.

```csharp title="C#"
public virtual T[] AcceptableValues { get; }
```

## Methods

### Clamp(object)

Change the value to be acceptable, if it's not already.

```csharp title="C#"
public override object Clamp(object value)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object/)

#### Returns

[object](https://learn.microsoft.com/dotnet/api/system.object/)

### IsValid(object)

Check if the value is an acceptable value.

```csharp title="C#"
public override bool IsValid(object value)
```

#### Parameters

`value` [object](https://learn.microsoft.com/dotnet/api/system.object/)

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean/)

### ToDescriptionString()

Get the string for use in config files.

```csharp title="C#"
public override string ToDescriptionString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)
