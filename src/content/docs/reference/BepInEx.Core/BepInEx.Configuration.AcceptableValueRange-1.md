---
title: AcceptableValueRange<T> Class
slug: reference/bepinex.configuration.acceptablevaluerange-1
sidebar:
  label: AcceptableValueRange<T>
---
## Definition

Specify the range of acceptable values for a setting.

```csharp title="C#"
public class AcceptableValueRange<T> : AcceptableValueBase where T : IComparable
```

### Type Parameters

`T`  


Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [AcceptableValueBase](../bepinex.configuration.acceptablevaluebase/)

## Constructors

### AcceptableValueRange(T, T)

```csharp title="C#"
public AcceptableValueRange(T minValue, T maxValue)
```

#### Parameters

`minValue` T  
Lowest acceptable value

`maxValue` T  
Highest acceptable value


## Properties

### MinValue

Lowest acceptable value

```csharp title="C#"
public virtual T MinValue { get; }
```

### MaxValue

Highest acceptable value

```csharp title="C#"
public virtual T MaxValue { get; }
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