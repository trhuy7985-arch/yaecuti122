const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Cấu hình Socket.io và cho phép CORS để frontend HTML có thể kết nối
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Dữ liệu bộ nhớ tạm
let players = {}; // Lưu trữ { socketId: 'Tên người chơi' }
let scores = {};  // Lưu trữ { socketId: Điểm số }
let currentQuestionIndex = -1;
let isExamRunning = false;

// Ngân hàng câu hỏi mẫu (Định dạng đáp án phải bắt đầu bằng A, B, C, D vì frontend của bạn đang cắt ký tự đầu: opt.charAt(0))
const questions = [
    {
        content: "Câu 1: Hàm số y = x^3 - 3x + 2 đồng biến trên khoảng nào?",
        options: ["A. (-∞; -1) và (1; +∞)", "B. (-1; 1)", "C. (-∞; 1)", "D. R"],
        correctAnswer: "A"
    },
    {
        content: "Câu 2: Đạo hàm của hàm số y = sin(2x) là gì?",
        options: ["A. 2cos(2x)", "B. cos(2x)", "C. -2cos(2x)", "D. -cos(2x)"],
        correctAnswer: "A"
    },
    {
        content: "Câu 3: Thể tích khối chóp có diện tích đáy B và chiều cao h là?",
        options: ["A. V = B.h", "B. V = (1/3).B.h", "C. V = (1/2).B.h", "D. V = 3.B.h"],
        correctAnswer: "B"
    }
];

io.on('connection', (socket) => {
    console.log('Có người dùng kết nối:', socket.id);

    // Xử lý khi người dùng vào phòng thi
    socket.on('join_room', (userName) => {
        players[socket.id] = userName;
        scores[socket.id] = 0;
        
        // Gửi danh sách người chơi và điểm số cho tất cả mọi người
        io.emit('update_players', players);
        io.emit('update_scores', scores);
    });

    // ADMIN Bắt đầu bài thi
    socket.on('start_exam', () => {
        isExamRunning = true;
        currentQuestionIndex = 0;
        
        // Reset toàn bộ điểm về 0
        for(let id in players) scores[id] = 0;
        io.emit('update_scores', scores);
        
        // Gửi câu hỏi đầu tiên
        io.emit('new_question', {
            content: questions[currentQuestionIndex].content,
            options: questions[currentQuestionIndex].options
        });
    });

    // Xử lý học sinh nộp đáp án
    socket.on('submit_answer', (answer) => {
        if (!isExamRunning || currentQuestionIndex < 0) return;

        const correctAns = questions[currentQuestionIndex].correctAnswer;
        if (answer === correctAns) {
            scores[socket.id] += 10; // Cộng 10 điểm nếu đúng
            io.emit('update_scores', scores); // Cập nhật bảng xếp hạng Realtime
        }
    });

    // ADMIN Chuyển câu hỏi tiếp theo
    socket.on('next_question', () => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            // Còn câu hỏi -> Gửi tiếp
            io.emit('new_question', {
                content: questions[currentQuestionIndex].content,
                options: questions[currentQuestionIndex].options
            });
        } else {
            // Hết câu hỏi -> Kết thúc bài thi
            isExamRunning = false;
            io.emit('exam_finished');
        }
    });

    // Xử lý khi người chơi thoát
    socket.on('disconnect', () => {
        console.log('Người dùng đã ngắt kết nối:', socket.id);
        delete players[socket.id];
        delete scores[socket.id];
        io.emit('update_players', players);
        io.emit('update_scores', scores);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server Socket.io đang chạy tại http://localhost:${PORT}`);
});
