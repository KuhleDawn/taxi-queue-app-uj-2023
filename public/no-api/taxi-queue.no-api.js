
document.addEventListener('alpine:init', () => {

  Alpine.data('TaxiQueue', () => {

    return {
      version: 'no-api-1.0',
      queue_length: 0,
      taxi_queue_length: 0,

      joinQueue() {
        this.queue_length += 1;
      },

      leaveQueue() {
        this.queue_length -= 1;
      },

      joinTaxiQueue() {
        this.taxi_queue_length += 1;
      },

      taxiDepart() {
        
        if (this.queue_length >= 12) {
          
          this.taxi_queue_length -= 1;

          
          this.queue_length -= 12;
        }
      },

      queueLength() {
        return this.queue_length;
      },

      taxiQueueLength() {
        return this.taxi_queue_length;
      }
    }

  });
});