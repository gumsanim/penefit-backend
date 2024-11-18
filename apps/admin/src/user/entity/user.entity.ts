import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class UserModel {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({
        unique: true
    })
    userId: string;

    @Column()
    password: string;

    @Column()
    address: string;

    // 생성될 때 데이터가 자동으로 생김
    @CreateDateColumn()
    createdAt: Date;

    // 수정될 때 데이터가 자동으로 업데이트
    @UpdateDateColumn()
    updatedAt: Date;

    // 업데이트가 될 때 마다 1씩 증가
    // 처음 생성 시 값은 1
    // save 실행 시
    // @VersionColumn()
    // version: number;

    @Column()
    @Generated('increment')
    additionalNumber: number;
}
