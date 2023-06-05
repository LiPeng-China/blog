## 别称

单例模式

## 目的

系统内存中该类只存在一个对象，节省了系统资源，对于一些需要频繁创建销毁的对象，使用单例模式可以提高系统性能。

## 程序实例

### 1、饿汉式（静态常量）【可用】

**优点**：类装在的时候完成实例化，避免了线程同步问题；

**缺点**：如果没有使用到这个实例，就相当于是内存浪费。

```java
public class Singleton_01 {
    private final static Singleton_01 INSTANCE = new Singleton_01();

    private Singleton_01() {
    }

    public static Singleton_01 getInstance() {
        return INSTANCE;
    }
}

class Main_01 {
    public static void main(String[] args) {
        Singleton_01 instance_01 = Singleton_01.getInstance();
        Singleton_01 instance_02 = Singleton_01.getInstance();
        System.out.println(instance_01 == instance_02);
    }
}
```

### 2、饿汉式（静态代码块）【可用】

**优缺点**：同上。

```java
public class Singleton_02 {
    private static Singleton_02 instance;

    static {
        instance = new Singleton_02();
    }

    private Singleton_02() {
    }

    public static Singleton_02 getInstance() {
        return instance;
    }
}

class Main_02 {
    public static void main(String[] args) {
        Singleton_01 instance_01 = Singleton_01.getInstance();
        Singleton_01 instance_02 = Singleton_01.getInstance();
        System.out.println(instance_01 == instance_02);
    }
}
```

### 3、懒汉式（线程不安全）【不可用】

**优点**：延迟加载；

**缺点**：线程不安全。

```java
public class Singleton_03 {
    private static Singleton_03 instance;

    private Singleton_03() {
    }

    public static Singleton_03 getInstance() {
        if (Objects.isNull(instance)) {
            instance = new Singleton_03();
        }
        return instance;
    }
}

class Main_03 {
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            new Thread(() -> {
                System.out.println(Singleton_03.getInstance().hashCode());
            }).start();
        }
    }
}
```

### 4、懒汉式（同步方法）【不推荐用】

**优点**：延迟加载，线程安全；

**缺点**：同步效率低：后续的线程不需要进入 `if` ，会直接返回，但仍然会被同步限制。

```java
public class Singleton_04 {
    private static Singleton_04 instance;

    private Singleton_04() {
    }

    public static synchronized Singleton_04 getInstance() {
        if (Objects.isNull(instance)) {
            instance = new Singleton_04();
        }
        return instance;
    }
}

class Main_04 {
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            new Thread(() -> {
                System.out.println(Singleton_04.getInstance().hashCode());
            }).start();
        }
    }
}
```

### 5、懒汉式（同步代码块）【不可用】

**优点**：延迟加载，同步代码块；

**缺点**：线程不安全：一个线程进入`if` ，此时切换到另一个线程，也会进入到 `if` ，此时就会产生多个实例。

```java
public class Singleton_05 {
    private static Singleton_05 instance;

    private Singleton_05() {
    }

    public static Singleton_05 getInstance() {
        if (Objects.isNull(instance)) {
            synchronized (Singleton_05.class) {
                instance = new Singleton_05();
            }
        }
        return instance;
    }
}

class Main_05 {
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            new Thread(() -> {
                System.out.println(Singleton_05.getInstance().hashCode());
            }).start();
        }
    }
}
```

### 6、双重检查（Double check）【推荐使用】

**优点**：线程安全、延迟加载、效率高。

```java
public class Singleton_06 {
    private static volatile Singleton_06 instance;

    private Singleton_06() {
    }

    public static Singleton_06 getInstance() {
        if (Objects.isNull(instance)) {      // 第一次判断：减少后续线程上锁的次数（加锁耗资源）
            synchronized (Singleton_06.class) {
                if (Objects.isNull(instance)) {      // 第二次判断：防止线程不安全
                    instance = new Singleton_06();
                }
            }
        }
        return instance;
    }
}

class Main_06 {
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            new Thread(() -> {
                System.out.println(Singleton_06.getInstance().hashCode());
            }).start();
        }
    }
}
```

### 7、静态内部类【推荐使用】

**优点**：线程安全、延迟加载、效率高。

- JVM 保证单例：加载外部类时不会加载内部类；
- JVM 保证线程安全：类的初始化是线程安全的。

```java
public class Singleton_07 {
    private Singleton_07() {
    }

    private static class SingletonClass {
        public static final Singleton_07 INSTANCE = new Singleton_07();
    }

    public static Singleton_07 getInstance() {
        return SingletonClass.INSTANCE;
    }
}

class Main_07 {
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            new Thread(() -> {
                System.out.println(Singleton_07.getInstance().hashCode());
            }).start();
        }
    }
}
```

### 8、枚举【推荐使用】

**优点**：解决多线程同步问题，还能防止反序列化重新创建新的对象。

```java
public enum Singleton_08 {
    INSTANCE;
}

class Main_08 {
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            new Thread(() -> {
                System.out.println(Singleton_08.INSTANCE.hashCode());
            }).start();
        }
    }
}
```

## 使用场景

- 需要频繁的进行创建和销毁的对象；
- 创建对象时耗时过多或耗费资源过多，但又经常用到的对象；
- 工具类对象；
- 频繁访问数据库或文件的对象。