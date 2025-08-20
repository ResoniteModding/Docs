---
title: LogLevelExtensions Class
slug: reference/bepinex.logging.loglevelextensions
sidebar:
  label: LogLevelExtensions
---
## Definition

Helper methods for log level handling.

```csharp title="C#"
public static class LogLevelExtensions
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Methods

### GetHighestLevel(LogLevel)

Gets the highest log level when there could potentially be multiple levels provided.

```csharp title="C#"
public static LogLevel GetHighestLevel(this LogLevel levels)
```

#### Parameters

`levels` [LogLevel](../bepinex.logging.loglevel/)  
The log level(s).

#### Returns

[LogLevel](../bepinex.logging.loglevel/)  
The highest log level supplied.

### GetConsoleColor(LogLevel)

Returns a translation of a log level to it's associated console colour.

```csharp title="C#"
public static ConsoleColor GetConsoleColor(this LogLevel level)
```

#### Parameters

`level` [LogLevel](../bepinex.logging.loglevel/)  
The log level(s).

#### Returns

[ConsoleColor](https://learn.microsoft.com/dotnet/api/system.consolecolor/)  
A console color associated with the highest log level supplied.