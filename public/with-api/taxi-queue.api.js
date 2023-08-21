
document.addEventListener('alpine:init', () => {

    Alpine.data('TaxiQueue', () => {

        return {
            version: 'api-1.0',
            queueLength: 0,
            taxiQueueLength: 0,
            init() {
                axios
                    .get('/api/passenger/queue')
                    .then(result => {
                        // an example API call
                        this.queueLength = result.data.queueCount
                    });
            },
            joinQueue() {
                this.queue_length += 1;
            },
            leaveQueue() {
                this.queue_length -= 1;
            },
            joinTaxiQueue() {
                this.taxi_queue_length += 1;
            },
            queueLength() {
                return this.queueLength
            },
            taxiQueueLength() {
                return this.taxiQueueLength
            },
            taxiDepart() {
                if (this.queue_length >= 12) {
                    this.taxi_queue_length -= 1;
                    this.queue_length -= 12;
                  }
            },
        };
    });
});