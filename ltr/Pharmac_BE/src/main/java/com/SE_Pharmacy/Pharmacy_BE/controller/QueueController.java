package com.SE_Pharmacy.Pharmacy_BE.controller;

import com.SE_Pharmacy.Pharmacy_BE.po.Queue;
import com.SE_Pharmacy.Pharmacy_BE.service.QueueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/queues")
public class QueueController {

    private final QueueService queueService;

    @Autowired
    public QueueController(QueueService queueService) {
        this.queueService = queueService;
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addQueue(@RequestBody Queue queue) {
        queueService.addQueue(queue);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{qid}")
    public ResponseEntity<Void> deleteQueue(@PathVariable Long qid) {
        queueService.deleteQueue(qid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/storehouse/{storehouseId}")
    public ResponseEntity<List<Queue>> getQueuesByStorehouse(@PathVariable String storehouseId) {
        List<Queue> queues = queueService.getQueuesByStorehouse(storehouseId);
        return new ResponseEntity<>(queues, HttpStatus.OK);
    }

    @GetMapping("/bill/{billId}")
    public ResponseEntity<Queue> getQueueByBillId(@PathVariable Long billId) {
        Queue queue = queueService.getQueueByBillId(billId);
        return new ResponseEntity<>(queue, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updateQueue(@RequestBody Queue queue) {
        queueService.updateQueue(queue);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}





