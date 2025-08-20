---
title: ConsoleManager Class
slug: reference/bepinex.consolemanager
sidebar:
  label: ConsoleManager
---
## Definition

```csharp title="C#"
public static class ConsoleManager
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

## Fields

### ConfigConsoleEnabled

```csharp title="C#"
public static readonly ConfigEntry<bool> ConfigConsoleEnabled
```

### ConfigPreventClose

```csharp title="C#"
public static readonly ConfigEntry<bool> ConfigPreventClose
```

### ConfigConsoleShiftJis

```csharp title="C#"
public static readonly ConfigEntry<bool> ConfigConsoleShiftJis
```

### ConfigConsoleOutRedirectType

```csharp title="C#"
public static readonly ConfigEntry<ConsoleManager.ConsoleOutRedirectType> ConfigConsoleOutRedirectType
```

## Properties

### ConsoleEnabled

```csharp title="C#"
public static bool ConsoleEnabled { get; }
```

### ConsoleActive

True if an external console has been started, false otherwise.

```csharp title="C#"
public static bool ConsoleActive { get; }
```

### StandardOutStream

The stream that writes to the standard out stream of the process. Should never be null.

```csharp title="C#"
public static TextWriter StandardOutStream { get; }
```

### ConsoleStream

The stream that writes to an external console. Null if no such console exists

```csharp title="C#"
public static TextWriter ConsoleStream { get; }
```

## Methods

### Initialize(bool, bool)

```csharp title="C#"
public static void Initialize(bool alreadyActive, bool useManagedEncoder)
```

#### Parameters

`alreadyActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  

`useManagedEncoder` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  


### CreateConsole()

```csharp title="C#"
public static void CreateConsole()
```


### DetachConsole()

```csharp title="C#"
public static void DetachConsole()
```


### SetConsoleTitle(string)

```csharp title="C#"
public static void SetConsoleTitle(string title)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string/)  


### SetConsoleColor(ConsoleColor)

```csharp title="C#"
public static void SetConsoleColor(ConsoleColor color)
```

#### Parameters

`color` [ConsoleColor](https://learn.microsoft.com/dotnet/api/system.consolecolor/)