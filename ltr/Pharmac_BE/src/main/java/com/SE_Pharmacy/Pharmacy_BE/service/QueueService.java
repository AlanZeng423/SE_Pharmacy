package com.SE_Pharmacy.Pharmacy_BE.service;

import com.SE_Pharmacy.Pharmacy_BE.po.Queue;

import java.util.List;

public interface QueueService {

    void addQueue(Queue queue);

    void deleteQueue(Long qid);

    List<Queue> getQueuesByStorehouse(String storehouseId);

    Queue getQueueByBillId(Long billId);

    void updateQueue(Queue queue);
}
