---
title: LogEventArgs Class
slug: reference/bepinex.logging.logeventargs
sidebar:
  label: LogEventArgs
---
## Definition

Log event arguments. Contains info about the log message.

```csharp title="C#"
public class LogEventArgs : EventArgs
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs/)

## Constructors

### LogEventArgs(object, LogLevel, ILogSource)

Creates the log event args-

```csharp title="C#"
public LogEventArgs(object data, LogLevel level, ILogSource source)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Logged data.

`level` [LogLevel](../bepinex.logging.loglevel/)  
Log level of the data.

`source` [ILogSource](../bepinex.logging.ilogsource/)  
Log source that emits these args.


## Properties

### Data

Logged data.

```csharp title="C#"
public object Data { get; }
```

### Level

Log levels for the data.

```csharp title="C#"
public LogLevel Level { get; }
```

### Source

Log source that emitted the log event.

```csharp title="C#"
public ILogSource Source { get; }
```

## Methods

### ToString()

Returns a string that represents the current object.

```csharp title="C#"
public override string ToString()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
A string that represents the current object.

### ToStringLine()

Like [ToString()](../bepinex.logging.logeventargs.tostring/#tostring/) but appends newline at the end.

```csharp title="C#"
public string ToStringLine()
```

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string/)  
Same output as [ToString()](../bepinex.logging.logeventargs.tostring/#tostring/) but with new line.