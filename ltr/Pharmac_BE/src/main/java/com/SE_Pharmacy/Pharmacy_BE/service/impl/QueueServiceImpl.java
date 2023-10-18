package com.SE_Pharmacy.Pharmacy_BE.service.impl;

import com.SE_Pharmacy.Pharmacy_BE.mapper.QueueMapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Queue;
import com.SE_Pharmacy.Pharmacy_BE.service.QueueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QueueServiceImpl implements QueueService {

    private  QueueMapper queueMapper;

    @Autowired
    public QueueServiceImpl(QueueMapper queueMapper) {
        this.queueMapper = queueMapper;
    }

    @Override
    public void addQueue(Queue queue) {
        queueMapper.addQueue(queue);
    }

    @Override
    public void deleteQueue(Long qid) {
        queueMapper.deleteQueue(qid);
    }

    @Override
    public List<Queue> getQueuesByStorehouse(String storehouseId) {
        return queueMapper.getQueuesByStorehouse(storehouseId);
    }

    @Override
    public Queue getQueueByBillId(Long billId) {
        return queueMapper.getQueueByBillId(billId);
    }

    @Override
    public void updateQueue(Queue queue) {
        queueMapper.updateQueue(queue);
    }
}





