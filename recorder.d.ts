var Recorder: {
    new(AudioSource: any, config?: any): Recorder;
};

interface Recorder {
    record(): void;
    stop(): void;
    clear(): void;
    exportWav(callback?: any, type?: string);
    forceDownload(blob, filename?): void;
    getBuffer(callback?: any)
    configure(any): void
}