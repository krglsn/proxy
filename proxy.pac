function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.preview.*.dev")) {
        return "PROXY 192.168.1.88:22";
    }
    return "DIRECT";
}
