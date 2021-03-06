var namespace = '$lpm-';

module.exports = {
    REQUEST: namespace + 'request',
    RESPONSE: namespace + 'response',
    SOFT_KILL: namespace + 'softKill',
    HARD_KILL: namespace + 'hardKill',
    READY: namespace + 'ready',
    HEALTH: namespace + 'health',
    OTHER: namespace + 'other-',
    BUSY: namespace + 'busy',
    DECLARE_PID: namespace + 'parent-pid',
    HANDLED_SOCKET: namespace + 'handled-sock',
    CLOSED_SOCKET: namespace + 'closed-sock',
    NAMESPACE: namespace
};