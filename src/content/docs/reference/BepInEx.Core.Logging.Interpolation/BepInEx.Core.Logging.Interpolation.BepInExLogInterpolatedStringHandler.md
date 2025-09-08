---
title: BepInExLogInterpolatedStringHandler Class
slug: reference/bepinex.core.logging.interpolation.bepinexloginterpolatedstringhandler
sidebar:
  label: BepInExLogInterpolatedStringHandler
---
## Definition

Interpolated string handler for BepInEx [Logger](../bepinex.logging.logger/). This allows to conditionally skip logging certain messages and speed up logging in certain places.

```csharp title="C#"
public class BepInExLogInterpolatedStringHandler
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)
## Remarks

The class isn't meant to be constructed manually. Instead, use `BepInEx.Logging.ManualLogSource.Log(BepInEx.Logging.LogLevel%2cBepInEx.Core.Logging.Interpolation.BepInExLogInterpolatedStringHandler)` with string interpolation.

## Constructors

### BepInExLogInterpolatedStringHandler(int, int, LogLevel, out bool)

Constructs a log handler.

```csharp title="C#"
public BepInExLogInterpolatedStringHandler(int literalLength, int formattedCount, LogLevel logLevel, out bool isEnabled)
```

#### Parameters

`literalLength` [int](https://learn.microsoft.com/dotnet/api/system.int32/)  
Length of the literal string.

`formattedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32/)  
Number for formatted items.

`logLevel` [LogLevel](../bepinex.logging.loglevel/)  
Log level the message belongs to.

`isEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
Whether this string should be logged.


## Properties

### Enabled

Whether the interpolation is enabled and string will be logged.

```csharp title="C#"
public bool Enabled { get; }
```

## Methods

### AppendLiteral(string)

Appends a literal string to the interpolation.

```csharp title="C#"
public void AppendLiteral(string s)
```

#### Parameters

`s` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
String to append.


### AppendFormatted<T>(T)

Appends a value to the interpolation.

```csharp title="C#"
public void AppendFormatted<T>(T t)
```

#### Parameters

`t` T  
Value to append.


### AppendFormatted<T>(T, string)

Append a formattable item.

```csharp title="C#"
public void AppendFormatted<T>(T t, string format) where T : IFormattable
```

#### Parameters

`t` T  
Item to append.

`format` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Format to append with.


### AppendFormatted(nint, string)

Append an IntPtr.

```csharp title="C#"
public void AppendFormatted(nint t, string format)
```

#### Parameters

`t` [nint](https://learn.microsoft.com/dotnet/api/system.intptr/)  
Item to append.

`format` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Format to append with.


### ToString()

Returns a string that represents the current object.

```csharp title="C#"
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
A string that represents the current object.