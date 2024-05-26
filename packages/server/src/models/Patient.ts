import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Patient extends Model {
    public paciente_id!: number;
    public user_id!: number;
}

Patient.init(
    {
        paciente_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'pacientes',
    }
);

export default Patient;
